import zod from "zod";

export const BusinessRegistrationRequest = zod.object({
  firstName: zod.string().trim().min(1, "First name is required"),
  lastName: zod.string().trim().min(1, "Last name is required"),
  email: zod.string().email("Invalid email"),
  password: zod.string().min(8, "Password must be at least 8 characters"),
  businessName: zod.string().trim().min(1, "Business name is required"),
  businessType: zod.string().trim().min(1, "Business type is required"),
  logo: zod.string().url().optional(),
});
