import { BusinessModel } from "./business.model";
import { BusinessDocument, BusinessRequest } from "@interfaces/business.types";

export const getBusinessByEmail = async (
  email: string
): Promise<BusinessDocument | undefined> => {
  const business = await BusinessModel.findOne({ email });
  return business?.toObject();
};

export const createBusiness = async (
  business: BusinessRequest
): Promise<BusinessDocument> => {
  return await BusinessModel.create(business);
};

export const getBusinessById = async (
  businessId: string
): Promise<BusinessDocument | null> => {
  return await BusinessModel.findById(businessId);
};
