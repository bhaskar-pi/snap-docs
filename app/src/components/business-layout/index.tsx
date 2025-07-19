import React from "react";
import styles from "./business-layout.module.css";
import Topbar from "./topbar";
import Logo from "@components/logo";
import { navItems } from "./navitems";
import NavItem from "@components/navbar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const onClickLogout = (path: string) => {
    console.log({ path });
  };

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className="row vh-100">
        <div className={`col-md-2 p-4 ${styles.sidebar}`}>
          <Logo className="mb-4" />
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

        <div className="col-md-10 p-0">
          <Topbar title={title || "Dashboard"} description="Welcome Back!" />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
