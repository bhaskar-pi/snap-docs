import { Router } from "express";
import { login, signup } from "modules/auth/auth.controller";
import { validateBusiness } from "shared/middlewares/validate.middleware";
import { validateLoginRequest } from "shared/middlewares/auth.middleware";
import { BusinessValidator } from "modules/business/business.validator";
import { LoginRequestValidation } from "modules/auth/auth.validator";

const authRouter = Router();

authRouter.post("/login", validateLoginRequest(LoginRequestValidation), login);
authRouter.post("/signup", validateBusiness(BusinessValidator), signup);

export default authRouter;
