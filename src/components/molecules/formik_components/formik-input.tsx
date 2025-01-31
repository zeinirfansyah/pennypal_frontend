// FormikInput.tsx
import React from "react";
import { useField } from "formik";
import { Input, InputProps } from "@/components/atoms/input";

interface FormikInputProps extends InputProps {
  name: string;
}

export const FormikInput: React.FC<FormikInputProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <Input
      {...field}
      {...props}
      error={meta.touched && meta.error ? meta.error : undefined}
    />
  );
};
