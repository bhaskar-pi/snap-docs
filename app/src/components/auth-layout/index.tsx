import styles from "./auth-layout.module.css";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${styles.layout} w-100 h-100 g-0`}>
      <div className="row w-100 h-100 g-0">
        <div className={`col-md-7 ${styles.container}`}>
          <div className="mb-4">
            <h1 className={styles.brand}>SnapDocs</h1>
            <p className={styles.description}>
              Stop chasing documents. Start collecting them smartly.
            </p>
          </div>
        </div>

        <div className={`col-md-5 ${styles.children}`}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
