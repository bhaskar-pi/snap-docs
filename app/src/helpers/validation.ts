export const getFirstZodErrorMessage = (
  errors: Record<string, { _errors?: string[] }>
): string => {
  const keys = Object.keys(errors).filter((key) => key !== "_errors");
  const firstKey = keys[0];

  if (firstKey) {
    const fieldErrors = errors[firstKey]?._errors;
    if (fieldErrors && fieldErrors.length > 0) {
      return fieldErrors[0];
    }
  }

  return "Validation failed";
};

export const getErrorMessage = (error: {
  response: { data: { message: string }; statusText: string };
  message: string;
}): string => {
  return (
    error?.response?.data?.message ||
    error?.message ||
    error?.response?.statusText
  );
};
