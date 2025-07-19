import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import styles from "./navbar.module.css";

interface Props {
  path: string;
  label: string;
  icon: LucideIcon;
  isDanger?: boolean;
  onClick?: (path: string) => void;
}

const NavItem: React.FC<Props> = ({
  path,
  label,
  icon: Icon,
  onClick,
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  // ${
  //       isDanger ? "text-danger" : "text-dark"
  //     } ${isActive ? "fw-normal" : ""}`

  const className = isActive ? styles.active : styles.navitem;

  return (
    <Link
      to={path}
      onClick={() => onClick?.(path)}
      className={`${styles.navitem} ${className}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
