import React, { useState } from "react";
import type { SignInForm } from "@custom-types/auth";
import styles from "./signIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@store/useAuthStore";
import AuthLayout from "@components/auth-layout";
import { Form } from "@components/form-fields";
import Button from "@components/button";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, session, signIn } = useAuthStore();

  const [signInForm, setSignInForm] = useState<SignInForm>({
    email: "",
    password: "",
  });

  const onChangeEmailAndPassword = (prop: string, value: string) => {
    setSignInForm((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const onSingIn = async () => {
    console.log({ signInForm });
    await signIn(signInForm, navigate);
    console.log({ session, isLoading });
  };

  return (
    <AuthLayout title="Sign In">
      <div className={`${styles.container}`}>
        <div className="w-100 px-3 py-3" style={{ maxWidth: "400px" }}>
          <h2 className={styles.title}>Welcome!</h2>
          <p className={styles.description}>Sign in to your SnapDocs account</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSingIn();
            }}
            autoComplete="on"
          >
            <Form.Input
              label="Email"
              placeholder="Enter email..."
              className="py-2"
              value={signInForm.email}
              onChange={(e) =>
                onChangeEmailAndPassword("email", e.target.value)
              }
              required
              type="email"
              id="email"
              autoComplete="email"
            />
            <Form.PasswordInput
              label="Password"
              placeholder="Enter password..."
              className="py-2"
              value={signInForm.password}
              onChange={(e) =>
                onChangeEmailAndPassword("password", e.target.value)
              }
              required
              id="password"
              autoComplete="current-password"
            />

            <Button disabled={isLoading} type="submit" variant="primary"  className="py-2 mt-3">
              {<p>Login</p>}
            </Button>

            <div className="mt-2 text-center">
              <Link to="/signup" className={`${styles.footer}`}>
                Don't have an account?{" "}
                <span className="fw-normal" style={{ color: "var(--primary)" }}>
                  Sign up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
