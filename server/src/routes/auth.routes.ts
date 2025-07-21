import { Router } from "express";
import { validateRequest } from "middlewares/validate-request";
import { login } from "@controllers/auth.controller";
import { LoginRequestValidation } from "@request-validators/auth.validator";

const authRouter = Router();

authRouter.post(
  "/business/login",
  validateRequest(LoginRequestValidation),
  login
);

export default authRouter;
