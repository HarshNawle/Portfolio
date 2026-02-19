import { Router } from "express";
import { activeWakaTime } from "../controllers/wakaTime.js";

const WakaRoute = Router();

WakaRoute.get("/is-active", activeWakaTime);

export default WakaRoute;