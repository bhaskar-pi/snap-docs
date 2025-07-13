import zod from "zod";

export const LoginRequestValidation = zod.object({
  email: zod
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: zod.string().min(1, "Password required"),
});
