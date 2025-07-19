export const getButtonVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary-gradient":
      return {
        background:
          "linear-gradient(to left, var(--primaryL1), var(--primary))",
        color: "var(--white)",
      };

    case "success":
      return {
        backgroundColor: "var(--success)",
        color: "var(--white)",
      };

    case "negative":
      return {
        backgroundColor: "var(--negative)",
        color: "var(--white)",
      };

    case "primary":
    default:
      return {
        backgroundColor: "var(--primary)",
        color: "var(--white)",
      };
  }
};
