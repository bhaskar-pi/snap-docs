import { Router } from "express";
import { validateBusiness } from "modules/business/business.middleware";
import { BusinessRegistrationRequest } from "./business.validator";
import { registerBusiness } from "./business.controller";

const businessRoutes = Router();

businessRoutes.post(
  "/register",
  validateBusiness(BusinessRegistrationRequest),
  registerBusiness
);

export default businessRoutes;
