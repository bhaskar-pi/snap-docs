import { BaseBusiness } from "@interfaces/business";

export interface BusinessDto extends Omit<BaseBusiness, "password"> {
  businessId: string;
  createdAt: Date;
  updatedAt: Date;
}
