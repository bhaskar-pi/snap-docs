import React from "react";
import styles from "./logo.module.css";
import { Upload } from "lucide-react";

interface Props {
  className?: string;
  styles?: React.CSSProperties;
}

const Logo: React.FC<Props> = ({ styles: extraStyles, className }) => {
  return (
    <div className={`${className ? className : ""} ${styles.container}`} style={{ ...extraStyles }}>
      <div className={styles["logo-container"]}>
        <Upload size={26} color="var(--white)" strokeWidth={2.2} />
      </div>
      <h1 className={styles.logo}>SnapDocs</h1>
      <p></p>
    </div>
  );
};

export default Logo;
