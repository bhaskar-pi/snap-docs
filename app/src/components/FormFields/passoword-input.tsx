// auto generated from chakra-ui - by running this command - npx @chakra-ui/cli snippet add password-input

import type { ButtonProps, InputProps } from "@chakra-ui/react";
import {
  Box,
  Field,
  IconButton,
  mergeRefs,
  useControllableState,
} from "@chakra-ui/react";
import * as React from "react";
import InputText from "./inut-text";
import { Eye, EyeOff } from "lucide-react";

export interface PasswordVisibilityProps {
  defaultVisible?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  visibilityIcon?: { on: React.ReactNode; off: React.ReactNode };
}

export interface PasswordInputProps
  extends InputProps,
    PasswordVisibilityProps {
  label: string;
}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(function PasswordInput(props, ref) {
  const {
    label,
    defaultVisible,
    visible: visibleProp,
    onVisibleChange,
    visibilityIcon = { on: <Eye />, off: <EyeOff /> },
    ...rest
  } = props;

  const [visible, setVisible] = useControllableState({
    value: visibleProp,
    defaultValue: defaultVisible || false,
    onChange: onVisibleChange,
  });

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Field.Root required>
      <Field.Label fontWeight="medium" fontSize="sm">
        {label}
      </Field.Label>

      <Box position="relative" width="full">
        <InputText
          label=""
          ref={mergeRefs(ref, inputRef)}
          type={visible ? "text" : "password"}
          pr="10"
          {...rest}
        />

        <Box
          position="absolute"
          right="2"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
        >
          <VisibilityTrigger
            disabled={rest.disabled}
            onPointerDown={(e) => {
              if (rest.disabled) return;
              if (e.button !== 0) return;
              e.preventDefault();
              setVisible(!visible);
            }}
          >
            {visible ? visibilityIcon.off : visibilityIcon.on}
          </VisibilityTrigger>
        </Box>
      </Box>
    </Field.Root>
  );
});

const VisibilityTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function VisibilityTrigger(props, ref) {
    return (
      <IconButton
        tabIndex={-1}
        ref={ref}
        me="-2"
        aspectRatio="square"
        size="sm"
        variant="ghost"
        height="calc(100% - {spacing.2})"
        aria-label="Toggle password visibility"
        _hover={{ background: "transparent" }}
        {...props}
      />
    );
  }
);
