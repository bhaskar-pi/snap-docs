import React, { useState } from "react";
import { Button, Card, Stack, Text } from "@chakra-ui/react";
import { Form } from "@components/FormFields";
import { mapEnumToOptions } from "helpers/misc";
import { BusinessType } from "enums/business";
import Logo from "@components/Logo";
import styles from "./singUp.module.css";
import type { SignUpForm } from "@custom-types/auth";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({} as SignUpForm);

  const onChangeSignUpForm = (prop: string, value: string | File) => {
    setSignUpForm((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const onSignUp = () => {
    console.log({ signUpForm });
  };

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <Card.Root maxW="lg">
        <Card.Header>
          <Card.Title fontSize="2xl" fontWeight="600" textAlign="center">
            Create Account
          </Card.Title>
          <Card.Description fontSize="sm" color="gray.500" textAlign="center">
            Start collecting files efficiently
          </Card.Description>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
            <Form.InputPair
              fields={[
                {
                  label: "First Name",
                  placeholder: "John",
                  type: "text",
                  value: signUpForm.firstName,
                  onChange: (e) =>
                    onChangeSignUpForm("firstName", e.target.value),
                },
                {
                  label: "Last Name",
                  placeholder: "Doe",
                  type: "text",
                  value: signUpForm.lastName,
                  onChange: (e) =>
                    onChangeSignUpForm("lastName", e.target.value),
                },
              ]}
            />
            <Form.Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={signUpForm.email}
              onChange={(e) => onChangeSignUpForm("email", e.target.value)}
            />
            <Form.Input
              label="Business Name"
              placeholder="Enter your business name"
              type="text"
              value={signUpForm.businessName}
              onChange={(e) =>
                onChangeSignUpForm("businessName", e.target.value)
              }
            />
            <Form.Select
              label="Business Type"
              placeholder="Select business type"
              options={mapEnumToOptions(BusinessType)}
              value={[signUpForm.businessType]}
              onChange={(e) => onChangeSignUpForm("businessType", e[0])}
            />
            <Form.FileInput
              label="Business Logo"
              placeholder="Select file"
              value={signUpForm.logo || ""}
              onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSignUpForm("logo", data?.target?.files?.[0] || "")
              }
            />
            <Form.PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={signUpForm.password}
              onChange={(e) => onChangeSignUpForm("password", e.target.value)}
            />

            <Form.PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              value={signUpForm.confirmPassword}
              onChange={(e) =>
                onChangeSignUpForm("confirmPassword", e.target.value)
              }
            />
          </Stack>
        </Card.Body>

        <Card.Footer flexDirection="column" gap={3}>
          <Button
            variant="solid"
            w="full"
            textAlign="center"
            fontSize="sm"
            type="submit"
            onClick={onSignUp}
          >
            Sign Up
          </Button>
          <Text fontSize="sm" color="gray.500" flexDirection="row">
            Already have an account?{" "}
            <Link to={"/login"} style={{ color: "var(--blue)" }}>
              Sign In
            </Link>
          </Text>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default SignUp;
