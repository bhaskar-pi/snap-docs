import { Upload } from "lucide-react";
import styles from "./auth-layout.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
  column1?: string;
  column2?: string;
}

const AuthLayout: React.FC<Props> = ({
  children,
  column1 = "7",
  column2 = "5",
}) => {
  return (
    <div className={`${styles.layout} w-100 h-100 g-0`}>
      <div className="row w-100 h-100 g-0">
        <div className={`col-md-${column1} ${styles.container}`}>
          <div className={styles.context}>
            <div className={`${styles.icon} ${styles.glass}`}>
              <Upload size={60} color="white" strokeWidth={2.2} />
            </div>
            <h1 className={styles.brand}>SnapDocs</h1>
            <p className={styles.tagline}>
              Say goodbye to chasing documents on email and whatsapp - say
              hello 👋 to SnapDocs
            </p>
          </div>
          <div className={styles.footer}>
            <p>Secure</p>
            <div></div>
            <p>Fast</p>
            <div></div>
            <p>Reliable</p>
          </div>
        </div>

        <div className={`col-md-${column2} ${styles.children}`}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
