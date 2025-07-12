import React from "react";
import { Button, Card, Stack, Text } from "@chakra-ui/react";
import { Form } from "@components/Form";
import { mapEnumToOptions } from "helpers/misc";
import { BusinessType } from "enums/business";
import Logo from "@components/Logo";
import styles from "./singUp.module.css";

const SignUp: React.FC = () => (
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
              { label: "First Name", placeholder: "John", type: "text" },
              { label: "Last Name", placeholder: "Doe", type: "text" },
            ]}
          />
          <Form.Input
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <Form.Input
            label="Business Name"
            placeholder="Enter your business name"
            type="text"
          />
          <Form.Select
            label="Business Type"
            placeholder="Select business type"
            options={mapEnumToOptions(BusinessType)}
            value={[""]}
            onChange={() => {}}
          />
          <Form.FileInput label="Business Logo" placeholder="Select file" />
          <Form.Input
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <Form.Input
            label="Confirm Password"
            placeholder="Confirm your password"
            type="email"
          />
        </Stack>
      </Card.Body>

      <Card.Footer flexDirection="column" gap={3}>
        <Button variant="solid" w="full" textAlign="center" fontSize="sm">
          Sign Up
        </Button>
        <Text fontSize="sm" color="gray.500" flexDirection="row">
          Already have an account?{" "}
          <strong style={{ color: "var(--blue)" }}>Sign In</strong>
        </Text>
      </Card.Footer>
    </Card.Root>
  </div>
);

export default SignUp;
