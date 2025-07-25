import { Types } from "mongoose";
import { BusinessType } from "@enums/business";

export interface BaseBusiness {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  businessName: string;
  businessType: BusinessType;
  logo?: string;
}

export interface BusinessRequest extends BaseBusiness {
  confirmPassword: string;
}

export interface BusinessDocument extends BaseBusiness {
  _id: Types.ObjectId;
  __v?: number;
  createdAt: Date;
  updatedAt: Date;
}
