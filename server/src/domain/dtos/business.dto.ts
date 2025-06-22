import { BaseBusiness } from "@interfaces/business.types";

export interface BusinessDto extends Omit<BaseBusiness, "password"> {
  businessId: string;
  createdAt: Date;
  updatedAt: Date;
}
