import axios from "axios";

function getTodayData() {
    return new Date().toISOString().split("T")[0];
}

const API_KEY = process.env.WAKATIME_API_KEY;

// Helper: Check if user active
function isUserActive(lastActivityTime) {
    const now = Date.now() / 1000; // seconds
    const diff = now - lastActivityTime;

    return diff <= 15 * 60; // 15 minutes
}

export const activeWakaTime = async (req, res) => {
    try {
        const today = getTodayData();

        const response = await axios.get(
            "https://wakatime.com/api/v1/users/current/durations",
            {
                params: { date: today },
                auth: {
                    username: API_KEY,
                    password: ""
                }
            }
        );

        const durations = response.data.data;

        if(!durations.length) {
            return res.json({
                active: false,
                message: "No activity today"
            });  
        }

        // Get latest duration
        const lastDuration = durations[durations.length - 1];

        const lastStart = lastDuration.time;
        const lastEnd = lastStart + lastDuration.duration;

        const active = isUserActive(lastEnd);

        res.json({
            active,
            last_project: lastDuration.project,
            last_activity_time: new Date(lastEnd * 1000),
            duration_seconds: lastDuration.duration
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Failed to fetch WakaTime data" });
    }
}