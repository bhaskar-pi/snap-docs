import { BusinessDocument, BusinessRequest } from "@interfaces/business.types";
import { BusinessModel } from "@models/business.model";

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
