import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ENV } from "@config/env";
import { ExpressRequest } from "@interfaces/express";

export const authenticateToken = (
  request: ExpressRequest,
  response: Response,
  nextFunction: NextFunction
) => {
  try {
    const authHeader = request.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      response.status(401).json({ message: "Unauthorized: Token missing" });
      return;
    }

    const decode = jwt.verify(token, ENV.JWT_PRIVATE_KEY) as JwtPayload;

    request.business = {
      email: decode.email,
      id: decode.id,
      firstName: decode.firstName,
      lastName: decode.lastName,
      businessName: decode.businessName,
      businessType: decode.businessType,
    };

    nextFunction();
  } catch (error) {
    console.error("Failed at authenticating token", error);
    response.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
