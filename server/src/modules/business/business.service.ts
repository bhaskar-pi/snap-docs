import { BusinessModel } from "./business.model";
import { BusinessDocument, BusinessRequest } from "@interfaces/business";

export const getBusinessByEmail = async (
  email: string
): Promise<BusinessDocument | null> => {
  try {
    return await BusinessModel.findOne({ email });
  } catch (error) {
    console.error("Error in getBusinessByEmail:", error);
    throw error;
  }
};

export const createBusiness = async (
  business: BusinessRequest
): Promise<BusinessDocument | null> => {
  try {
    return await BusinessModel.create(business);
  } catch (error) {
    console.error("Error in createBusiness:", error);
    throw error;
  }
};

export const getBusinessById = async (
  businessId: string
): Promise<BusinessDocument | null> => {
  try {
    return await BusinessModel.findById(businessId);
  } catch (error) {
    console.error("Error in getBusinessById:", error);
    throw error;
  }
};
