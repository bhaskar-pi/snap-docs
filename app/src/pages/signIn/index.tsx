import React from "react";
import { Button, Card, Field, Input, Stack, Text } from "@chakra-ui/react";
import Logo from "@components/Logo";
import styles from "./signIn.module.css";

const SignIn: React.FC = () => (
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
          <Field.Root>
            <Field.Label fontWeight="medium" fontSize="sm" w="2xl">
              Email
            </Field.Label>
            <Input placeholder="Enter your email" type="email" />
          </Field.Root>

          <Field.Root>
            <Field.Label fontWeight="medium" fontSize="sm" w="2xl">
              Password
            </Field.Label>
            <Input placeholder="Enter your password" type="password" />
          </Field.Root>
        </Stack>
      </Card.Body>

      <Card.Footer flexDirection="column" gap={3}>
        <Button variant="solid" w="full" textAlign="center" fontSize="sm">
          Sign in
        </Button>
        <Text fontSize="sm" color="gray.500" flexDirection="row">
          Don't have an account?{" "}
          <strong style={{ color: "var(--blue)" }}>Sign Up</strong>
        </Text>
      </Card.Footer>
    </Card.Root>
  </div>
);

export default SignIn;
