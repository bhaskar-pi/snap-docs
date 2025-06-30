import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { BusinessRequest } from "shared/types/business.types";
import { createBusiness, getBusinessByEmail } from "./business.repository";
import { getBusinessDto } from "./business.dto";

export const registerBusiness = async (request: Request, response: Response) => {
  const business: BusinessRequest = request.body;

  const existingBusiness = await getBusinessByEmail(business.email);

  if (existingBusiness) {
    response.status(400).json({
      message: "Business with this email already existed.",
    });
  }

  const hashedPassword = await bcrypt.hash(business.password, 10);

  const newBusiness: BusinessRequest = {
    ...business,
    password: hashedPassword,
  };
  const createdBusiness = await createBusiness(newBusiness);
  const businessDto = getBusinessDto(createdBusiness);

  response
    .status(201)
    .json({ message: "Signup successfull.", data: businessDto });
};
