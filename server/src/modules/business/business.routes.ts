import { Router } from "express";
import { BusinessRegistrationRequest } from "./business.validator";
import { findBusinessById, registerBusiness } from "./business.controller";
import { validateRequest } from "@middlewares/validate-request";

const businessRouter = Router();

businessRouter.post(
  "/business/register",
  validateRequest(BusinessRegistrationRequest),
  registerBusiness
);
businessRouter.get("/business/:businessId", findBusinessById);

export default businessRouter;
