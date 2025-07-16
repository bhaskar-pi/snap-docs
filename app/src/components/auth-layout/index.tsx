import Logo from "@components/logo";
import styles from "./auth-layout.module.css";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${styles.layout} w-100 h-100 g-0`}>
      <div className="row w-100 h-100 g-0">
        <div className={`col-md-8 ${styles.container}`}>
          <div className="mb-4">
            <Logo />
          </div>
        </div>

        <div className={`col-md-4 ${styles.children}`}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
