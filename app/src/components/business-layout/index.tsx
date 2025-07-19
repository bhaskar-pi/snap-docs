import React from "react";
import styles from "./business-layout.module.css";
import Topbar from "./topbar";
import Logo from "@components/logo";
import { navItems } from "./navitems";
import NavItem from "@components/navbar";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const BusinessLayout: React.FC<Props> = ({ children, title, description }) => {
  const onClickLogout = (path: string) => {
    console.log({ path });
  };

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className="row vh-100">
        <div className={`col-md-3 p-4 ${styles.sidebar}`}>
          <Logo className="mb-4" styles={{ marginTop: "-8px" }} />
          <nav className={`${styles.navcontainer} nav`}>
            {navItems.map((nav) => (
              <NavItem
                key={nav.path}
                path={nav.path}
                label={nav.label}
                icon={nav.icon}
                onClick={
                  nav.path === "/logout"
                    ? () => onClickLogout(nav.path)
                    : undefined
                }
              />
            ))}
          </nav>
        </div>

        <div className={`col-md-9 p-0 ${styles.rightContainer}`}>
          <Topbar title={title} description={description} />
          <div className={styles.contentWrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLayout;
