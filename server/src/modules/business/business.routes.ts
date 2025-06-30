import { Router } from "express";
import { BusinessRegistrationRequest } from "./business.validator";
import { registerBusiness } from "./business.controller";
import { validateBusiness } from "./business.middleware";

const businessRoutes = Router();

businessRoutes.post(
  "/register",
  validateBusiness(BusinessRegistrationRequest),
  registerBusiness
);

export default businessRoutes;
