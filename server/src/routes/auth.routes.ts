import { Router } from "express";
import { login, signup } from "@controllers/auth.controller";
import { validateBusiness } from "@middlewares/validate.middleware";
import { validateLoginRequest } from "@middlewares/auth.middleware";
import { BusinessValidator } from "@validators/business.validator";
import { LoginRequestValidation } from "@validators/auth.validator";

const authRouter = Router();

authRouter.post("/login", validateLoginRequest(LoginRequestValidation), login);
authRouter.post("/signup", validateBusiness(BusinessValidator), signup);

export default authRouter;
