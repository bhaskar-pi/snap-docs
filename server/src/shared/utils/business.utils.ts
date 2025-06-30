import { BusinessDocument } from "shared/types/business.types";
import { BusinessDto } from "shared/dtos/business.dto";

export const getBusinessDto = (business: BusinessDocument): BusinessDto => {
  return {
    businessId: business._id.toString(),
    firstName: business.firstName,
    lastName: business.lastName,
    email: business.email,
    businessName: business.businessName,
    businessType: business.businessType,
    logo: business.logo,
    createdAt: business.createdAt,
    updatedAt: business.updatedAt,
  };
};
