import { TODAY_TIME, YESTERDAY_TIME } from "@/utils/constant";
import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";

type StatusType = {
  isCoding: boolean;
  lastSeen: string | null;
  editor?: string;
  project?: string;
  language?: string;
};

export function useWakaTime() {
  const [yesterday, setYesterday] = useState("0 mins");
  const [status, setStatus] = useState<StatusType | null>(null);
  const [loading, setLoading] = useState(true);


const fetchData = async () => {
  try {
    // yesterday
    const yRes = await apiClient.get(YESTERDAY_TIME);
    setYesterday(yRes.data?.time || "0 mins");

    // status
    const sRes = await apiClient.get(TODAY_TIME);
    setStatus(sRes.data);
  } catch (err) {
    console.error("WakaTime error:", err);
    setYesterday("0 mins");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return { yesterday, status, loading };
}