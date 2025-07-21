import zod from "zod";

export const BusinessRegistrationRequest = zod
  .object({
    firstName: zod
      .string()
      .trim()
      .nonempty("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(20, "First name must not exceed 15 characters"),
    lastName: zod
      .string()
      .trim()
      .nonempty("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(20, "Last name must not exceed 10 characters"),
    email: zod.string().email("Invalid email address"),
    password: zod
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: zod.string().nonempty("Confirm password is required"),
    businessName: zod
      .string()
      .trim()
      .nonempty("Business name is required")
      .max(20, "Business name must not exceed 20 characters"),
    businessType: zod.string().trim().min(1, "Business type is required"),
    logo: zod.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  })
  .transform(({ confirmPassword, ...rest }) => rest);
