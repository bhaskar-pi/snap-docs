import { Router } from "express";
import { login } from "modules/auth/auth.controller";
import { validateLoginRequest } from "modules/auth/auth.middleware";
import { LoginRequestValidation } from "modules/auth/auth.validator";

const authRouter = Router();

authRouter.post("/login", validateLoginRequest(LoginRequestValidation), login);

export default authRouter;
