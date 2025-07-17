import { Upload } from "lucide-react";
import googleIcon from "../../assets/google-icon.png";
import styles from "./auth-layout.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
  column1?: string;
  column2?: string;
}

const AuthLayout: React.FC<Props> = ({
  children,
  title,
  column1 = "7",
  column2 = "5",
}) => {
  return (
    <div className={`${styles.layout} w-100 h-100 g-0`}>
      <div className="row w-100 h-100 g-0">
        <div className={`col-md-${column1} ${styles.container}`}>
          <div className={styles.context}>
            <div className={`${styles.icon} ${styles.glass}`}>
              <Upload size={50} color="white" strokeWidth={2.2} />
            </div>
            <h1 className={styles.brand}>SnapDocs</h1>
            <p className={styles.tagline}>
              Streamline your document workflow with intelligent organization
              and seamless collaboration
            </p>
            <div className={`${styles.card} ${styles.glass}`}>
              <h1>{`Quick ${title}`}</h1>
              <button className="w-100">
                <img src={googleIcon} alt="google" />
                <span>Continue with Google</span>
              </button>
              <div className={styles.lineContainer}>
                <div></div>
                <span>OR</span>
                <span></span>
              </div>
              <p>Fill out the form to get started</p>
            </div>

            <div className={styles.dots}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>

            <div className={styles.footer}>
              <p>Secure</p>
              <div></div>
              <p>Fast</p>
              <div></div>
              <p>Reliable</p>
            </div>
          </div>
        </div>

        <div className={`col-md-${column2} ${styles.children}`}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
