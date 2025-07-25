import bcrypt from "bcrypt";
import { ENV } from "config/env";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getBusinessByEmail } from "@repositories/business.repository";
import { JWTPayload, Session } from "@interfaces/auth";

export const login = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;

    const business = await getBusinessByEmail(email);

    if (!business) {
      response.status(400).json({
        message: "Email does not exist. Please register",
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

    const payload: JWTPayload = {
      email: business.email,
      id: business._id.toString(),
      firstName: business.firstName,
      lastName: business.lastName,
      businessName: business.businessName,
      businessType: business.businessType,
    };

    const token = jwt.sign(payload, ENV.JWT_PRIVATE_KEY, {
      expiresIn: "1h",
    });

    const session: Session = {
      token,
      firstName: business.firstName,
      lastName: business.lastName,
      email: business.email,
      businessId: business._id.toString(),
      businessName: business.businessName,
    };

    response.status(200).json({ message: "Login Successful", data: session });
  } catch (error) {
    console.error("Login error:", error);
    response
      .status(500)
      .json({ message: "Something went wrong. Please try again later" });
  }
};
