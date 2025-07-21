import { Request } from "express";
import { JWTPayload } from "@interfaces/auth";

export interface ExpressRequest extends Request {
  business: JWTPayload
}
