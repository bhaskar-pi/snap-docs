import { Router } from "express";
import { validateLoginRequest } from "./auth.middleware";
import { LoginRequestValidation } from "./auth.validator";
import { login } from "./auth.controller";

const authRouter = Router();

authRouter.post("/login", validateLoginRequest(LoginRequestValidation), login);

export default authRouter;
