import { Router } from "express";
import {
  findBusinessById,
  registerBusiness,
} from "@controllers/business.controller";
import { BusinessRegistrationRequest } from "@request-validators/business.validator";
import { validateRequest } from "@middlewares/validate-request";

const businessRouter = Router();

businessRouter.post(
  "/business/register",
  validateRequest(BusinessRegistrationRequest),
  registerBusiness
);
businessRouter.get("/business/:businessId", findBusinessById);

export default businessRouter;
