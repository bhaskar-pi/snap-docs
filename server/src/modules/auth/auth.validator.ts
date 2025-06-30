import zod from "zod";

export const LoginRequestValidation = zod.object({
  email: zod.string().email("Invalid email"),
  password: zod.string().min(1, "Password required"),
});
