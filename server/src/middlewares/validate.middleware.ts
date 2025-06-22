import { NextFunction, Request, Response } from "express";
import { Schema } from "zod";

export const validateBusiness = (schema: Schema<any>) => {
  return (request: Request, response: Response, nextFunction: NextFunction) => {
    const result = schema.safeParse(request.body);
    if (!result.success) {
      response.status(400).json({
        message: "Validation failed",
        errors: result.error.format(),
      });
      return;
    }

    request.body = result.data;
    nextFunction();
  };
};
