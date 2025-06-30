import { BusinessDto } from "@dtos/business.dto";
import { BusinessDocument } from "@interfaces/business.types";

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
