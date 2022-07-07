export const validateRequiredFields = (requiredFields) => {
  return !!requiredFields.filter((field) => field.trim() !== "").length;
};
