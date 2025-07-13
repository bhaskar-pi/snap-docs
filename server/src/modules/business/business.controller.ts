import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  createBusiness,
  getBusinessByEmail,
  getBusinessById,
} from "./business.repository";
import { getBusinessDto } from "./business.dto";
import { BusinessRequest } from "@interfaces/business.types";

export const registerBusiness = async (
  request: Request,
  response: Response
) => {
  const business: BusinessRequest = request.body;

  const existingBusiness = await getBusinessByEmail(business.email);

  if (existingBusiness) {
    response.status(400).json({
      message: "Business with this email already existed",
    });
  }

  const hashedPassword = await bcrypt.hash(business.password, 10);

  const newBusiness: BusinessRequest = {
    ...business,
    password: hashedPassword,
  };
  await createBusiness(newBusiness);

  response.status(201).json({ message: "Signup successfull" });
};

export const findBusinessById = async (
  request: Request,
  response: Response
) => {
  const businessId = request.params.businessId;

  if (!businessId) {
    response.status(400).json({ message: "Business Id not found" });
    return;
  }

  const business = await getBusinessById(businessId);

  if (!business) {
    response.status(400).json({ message: "Business not found" });
    return;
  }

  const businessDto = getBusinessDto(business);
  response.status(200).json({ data: businessDto });
};
