export const mapEnumToOptions = (enumObject: object) => {
  return Object.values(enumObject).map((e) => ({
    label: e,
    value: e,
  }));
};

/**
 * Converts a camelCase string into a readable format with spaces and capitalized first letter.
 *
 * @param text - The camelCase string to convert (e.g., "firstName").
 * @returns The readable version of the string (e.g., "First Name").
 */
export const camelCaseToReadable = (text: string): string => {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};
