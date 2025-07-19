import React from "react";
import { Bell } from "lucide-react";
import Persona from "@components/persona";
import styles from "./business-layout.module.css";

interface Props {
  title: string;
  description: string;
}

const Topbar: React.FC<Props> = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back! Here is your document overview.</p>
      </div>
      <div className={styles.profile}>
        <div className={styles.bellWrapper}>
          <Bell size={24} fill="var(--grey)" color="var(--grey)" />
          <span className={styles.notificationDot}></span>
        </div>
        <Persona firstName="Bhaskar" lastName="Babu" />
      </div>
    </div>
  );
};

export default Topbar;
