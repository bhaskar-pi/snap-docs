import React from "react";
import { Upload } from "lucide-react";
import { Text } from "@chakra-ui/react";
import styles from "./logo.module.css";

interface Props {
  className?: string;
  styles?: React.CSSProperties;
}

const Logo: React.FC<Props> = ({ styles: extraStyles, className }) => {
  return (
    <div
      className={`${styles.logoContainer} ${className ? className : ""}`}
      style={{ ...extraStyles }}
    >
      <Upload color="var(--blue)" size={44} style={{ marginRight: "8px" }} strokeWidth={2.4} />
      <Text fontWeight="600" fontSize="3xl">
        SnapDocs
      </Text>
    </div>
  );
};

export default Logo;
