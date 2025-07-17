import React from "react";
import styles from "./logo.module.css";

interface Props {
  className?: string;
  styles?: React.CSSProperties;
}

const Logo: React.FC<Props> = ({ styles: extraStyles, className }) => {
  return (
    <div
      className={`${className ? className : ""}`}
      style={{ ...extraStyles }}
    >
      <h1 className={styles.logo}>SnapDocs</h1>
      <p></p>
    </div>
  );
};

export default Logo;
