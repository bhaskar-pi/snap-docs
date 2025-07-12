export const mapEnumToOptions = (enumObject: object) => {
  return Object.values(enumObject).map((e) => ({
    label: e,
    value: e,
  }));
};
