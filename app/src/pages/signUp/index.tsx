import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "@components/form-fields";
import type { SignUpForm } from "@custom-types/auth";
import { BusinessType } from "@enums/business";
import { mapEnumToOptions } from "@helpers/misc";
import AuthLayout from "@components/auth-layout";
import Button from "@components/button";
import styles from "./singUp.module.css";
import useAuthStore from "@store/useAuthStore";

const initialState: SignUpForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  businessName: "",
  businessType: "" as unknown as BusinessType,
  logo: "",
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, signUp } = useAuthStore();

  const [signUpForm, setSignUpForm] = useState<SignUpForm>(initialState);

  const onChangeSignUpForm = (prop: string, value: string | File) => {
    setSignUpForm((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const onSignUp = async () => {
    await signUp(signUpForm, navigate);
  };

  return (
    <AuthLayout title="Sign Up" column1="6" column2="6">
      <div className={`${styles.container}`}>
        <div className="w-100 px-2 py-3" style={{ maxWidth: "550px" }}>
          <h2 className={styles.title}>Join SnapDocs</h2>
          <p className={styles.description}>
            SnapDocs helps you collect and manage documents effortlessly.
            <br />
            Sign up to see how.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSignUp();
            }}
            autoComplete="on"
          >
            <Form.InputPair
              fields={[
                {
                  label: "First Name",
                  placeholder: "John",
                  id: "firstName",
                  value: signUpForm.firstName,
                  type: "text",
                  required: true,
                  onChange: (e) =>
                    onChangeSignUpForm("firstName", e.target.value),
                },
                {
                  label: "Last Name",
                  placeholder: "Doe",
                  id: "lastName",
                  value: signUpForm.lastName,
                  type: "text",
                  required: true,
                  onChange: (e) =>
                    onChangeSignUpForm("lastName", e.target.value),
                },
              ]}
            />
            <Form.InputPair
              fields={[
                {
                  label: "Email",
                  placeholder: "Enter your email",
                  id: "email",
                  value: signUpForm.email,
                  required: true,
                  type: "email",
                  onChange: (e) => onChangeSignUpForm("email", e.target.value),
                },
                {
                  label: "Business Name",
                  placeholder: "Enter your business name",
                  id: "businessName",
                  value: signUpForm.businessName,
                  type: "text",
                  required: true,
                  onChange: (e) =>
                    onChangeSignUpForm("businessName", e.target.value),
                },
              ]}
            />
            <Form.Select
              label="Business Type"
              placeholder="Select business type"
              options={mapEnumToOptions(BusinessType)}
              value={signUpForm.businessType}
              onChange={(data) => onChangeSignUpForm("businessType", data[0])}
              id="businessType"
              required
            />
            <Form.FileInput
              label="Business Logo"
              id="businessLogo"
              required={false}
              placeholder="Select file"
              value={signUpForm.logo}
              onChange={(data?: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSignUpForm("logo", data?.target.files?.[0]?.name || "")
              }
            />
            <div className="d-flex gap-3 w-100">
              {[
                {
                  label: "Password",
                  placeholder: "Enter your password",
                  id: "passowrd",
                  value: signUpForm.password,
                  required: true,
                  onChange: (e) =>
                    onChangeSignUpForm("password", e.target.value),
                },
                {
                  label: "Confirm Password",
                  placeholder: "Confirm your password",
                  id: "confirmPassword",
                  value: signUpForm.confirmPassword,
                  required: true,
                  onChange: (e) =>
                    onChangeSignUpForm("confirmPassword", e.target.value),
                },
              ].map((filed) => (
                <Form.PasswordInput {...filed} />
              ))}
            </div>
            <Button
              type="submit"
              className="py-2 mt-3"
              disabled={isLoading}
              isLoading={isLoading}
            >
              Create Account
            </Button>
            <div className="mt-2 text-center">
              <Link to="/login" className={`${styles.footer}`}>
                Already have an account?{" "}
                <span className="fw-normal" style={{ color: "var(--primary)" }}>
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
