import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ENV } from "config/env";
import { getBusinessByEmail } from "@modules/business";
import { Session } from "@interfaces/auth.types";

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
