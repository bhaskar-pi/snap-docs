import { Router } from "express";
import { LoginRequestValidation } from "./auth.validator";
import { login } from "./auth.controller";
import { validateRequest } from "@middlewares/validate-request";

const authRouter = Router();

authRouter.post("/business/login", validateRequest(LoginRequestValidation), login);

export default authRouter;
