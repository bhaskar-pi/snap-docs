import type { Error } from "@custom-types/misc";

export const getFirstZodErrorMessage = (
  errors: Record<string, { _errors?: string[] }>
): string | undefined => {
  const keys = Object.keys(errors).filter((key) => key !== "_errors");
  const firstKey = keys[0];

  if (firstKey) {
    const fieldErrors = errors[firstKey]?._errors;
    if (fieldErrors && fieldErrors.length > 0) {
      return fieldErrors[0];
    }
  }
};

export const getErrorMessage = (error: Error): string => {
  return (
    error?.response?.data?.message ||
    error?.message ||
    error?.response?.statusText
  );
};
