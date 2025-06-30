import { Router } from "express";
import { BusinessRegistrationRequest } from "./business.validator";
import { findBusinessById, registerBusiness } from "./business.controller";
import { validateBusiness } from "./business.middleware";

const businessRouter = Router();

businessRouter.post(
  "/register",
  validateBusiness(BusinessRegistrationRequest),
  registerBusiness
);
businessRouter.get("/:businessId", findBusinessById);

export default businessRouter;
