import zod from "zod";

export const DocumentRequestValidation = zod.object({
  fullName: zod
    .string()
    .trim()
    .nonempty("Full Name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(20, "Full name must not exceed 20 characters"),
  email: zod.string().email("Invalid email address"),
  dueDate: zod.string().optional(),
  phoneNumber: zod
    .string()
    .trim()
    .min(10, "Phone number must be 10 numbers")
    .max(10, "Phone number must be 10 numbers")
    .optional(),
  documents: zod
    .array(
      zod.object({
        id: zod.string().nonempty("Document ID is required"),
        name: zod.string().nonempty("Document name is required"),
      })
    )
    .min(1, "Select at least one document to send request")
    .refine(
      (docs) => {
        const names = docs.map((doc) => doc.name.trim().toLowerCase());
        const uniqueNames = new Set(names);
        return uniqueNames.size === names.length;
      },
      {
        message: "Duplicate documents names are not allowed",
      }
    ),
});
