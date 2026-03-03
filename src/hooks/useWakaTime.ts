import { TODAY_TIME, YESTERDAY_TIME } from "@/utils/constant";
import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";

type StatusType = {
  isCoding: boolean;
  lastSeen: string | null;
  editor: string | null;
  project: string | null;
  language: string | null;
};

export function useWakaTime() {
  const [yesterday, setYesterday] = useState("0 mins");
  const [status, setStatus] = useState<StatusType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        // 1️⃣ Always fetch current coding status
        const sRes = await apiClient.get(TODAY_TIME);
        const statusData: StatusType = sRes.data;

        if (!mounted) return;
        setStatus(statusData);

        // 2️⃣ If NOT coding → fetch yesterday's time
        if (!statusData.isCoding) {
          const yRes = await apiClient.get(YESTERDAY_TIME);
          if (!mounted) return;
          setYesterday(yRes.data?.time || "0 mins");
        } else {
          // Clear yesterday data when active
          setYesterday("");
        }
      } catch (err) {
        console.error("WakaTime error:", err);
        if (mounted) {
          setStatus(null);
          setYesterday("0 mins");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60_000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { yesterday, status, loading };
}