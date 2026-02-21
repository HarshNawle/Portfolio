import axios from "axios";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

function normalizeContributionDays(weeks = []) {
    return weeks.flatMap((week) =>
        week.contributionDays.map((day) => ({
            date: day.date,
            contributionCount: day.contributionCount,
            contributionLevel: day.contributionLevel,
            color: day.color,
        }))
    );
}

export const getContributionTable = async (req, res) => {
    const username = req.query.username || process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return res.status(500).json({
            error: "Missing GITHUB_TOKEN in environment variables",
        });
    }

    if (!username) {
        return res.status(400).json({
            error: "Missing GitHub username. Provide ?username=<name> or set GITHUB_USERNAME",
        });
    }

    const query = `
        query($login: String!) {
            user(login: $login) {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                                contributionLevel
                                color
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const { data } = await axios.post(
            GITHUB_GRAPHQL_ENDPOINT,
            {
                query,
                variables: { login: username },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (data.errors?.length) {
            return res.status(400).json({
                error: "GitHub GraphQL request failed",
                details: data.errors,
            });
        }

        const contributionCalendar =
            data.data?.user?.contributionsCollection?.contributionCalendar;

        if (!contributionCalendar) {
            return res.status(404).json({
                error: `Contribution data not found for user '${username}'`,
            });
        }

        return res.json({
            username,
            totalContributions: contributionCalendar.totalContributions,
            contributionDays: normalizeContributionDays(contributionCalendar.weeks),
        });
    } catch (error) {
        return res.status(500).json({
            error: "Failed to fetch contribution data from GitHub",
            details: error.response?.data || error.message,
        });
    }
};
