import React, { useState } from "react";
import { Button, Card, Stack, Text } from "@chakra-ui/react";
import Logo from "@components/Logo";
import type { SignInForm } from "@custom-types/auth";
import styles from "./signIn.module.css";
import { Form } from "@components/FormFields";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
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

  const onSingIn = () => {
    console.log({ signInForm });
  };

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <Card.Root maxW="md">
        <Card.Header>
          <Card.Title fontSize="2xl" fontWeight="600" textAlign="center">
            Welcome Back
          </Card.Title>
          <Card.Description fontSize="sm" color="gray.500" textAlign="center">
            Sign in to your account
          </Card.Description>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
            <Form.Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={signInForm?.email}
              onChange={(e) => {
                onChangeEmailAndPassword("email", e.target.value);
              }}
            />

            <Form.PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={signInForm?.password}
              onChange={(e) => {
                onChangeEmailAndPassword("password", e.target.value);
              }}
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
            onClick={onSingIn}
          >
            Sign in
          </Button>
          <Text fontSize="sm" color="gray.500" flexDirection="row">
            Don't have an account?{" "}
            <Link to="/sign-up" style={{ color: "var(--blue)" }}>
              Sign Up
            </Link>
          </Text>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default SignIn;
