export const getButtonVariantStyle = (variant?: string) => {
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
      return {
        backgroundColor: "var(--primary)",
        color: "var(--white)",
      };

    case "secondary":
      return {
        backgroundColor: "var(--primaryL2)",
        color: "var(--primary)",
      };

    case "neutral":
      return {
        backgroundColor: "var(--white)",
        color: "var(--dark)",
        border: "1px solid var(--grey-1)",
      };

    default:
      return {
        backgroundColor: "transparent",
        color: "var(--dark)",
        border: "1px solid var(--grey-1)",
      };
  }
};
