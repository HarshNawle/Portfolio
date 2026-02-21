import { Router } from "express";
import { getContributionTable } from "../controllers/github.js";

const githubRoute = Router();

githubRoute.get("/contributions", getContributionTable);

export default githubRoute;
