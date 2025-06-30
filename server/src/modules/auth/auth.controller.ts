import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ENV } from "config/env";
import { BusinessRequest } from "shared/types/business.types";
import { Session } from "shared/types/auth.types";
import { getBusinessDto } from "shared/utils/business.utils";
import {
  createBusiness,
  getBusinessByEmail,
} from "modules/business/business.repository";

export const login = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const business = await getBusinessByEmail(email);

  if (!business) {
    response.status(400).json({
      message: "Email does not exist",
    });
    return;
  }

  const isPasswordMatched = await bcrypt.compare(password, business.password);
  if (!isPasswordMatched) {
    response.status(400).json({
      message: "Incorrect password",
    });
    return;
  }

  const payload = {
    email: business.email,
    businessId: business._id.toString(),
  };

  const token = jwt.sign(payload, ENV.JWT_PRIVATE_KEY, {
    expiresIn: "2d",
  });

  const session: Session = {
    token,
    firstName: business.firstName,
    lastName: business.lastName,
    email: business.email,
    businessId: business._id.toString(),
  };

  response.status(200).json({ message: "Login Successful", data: session });
};

export const signup = async (request: Request, response: Response) => {
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
