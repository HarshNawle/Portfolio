import { HOST } from "@/utils/constant";
import axios from "axios";

const apiClient = axios.create({
    baseURL: HOST,
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiClient;