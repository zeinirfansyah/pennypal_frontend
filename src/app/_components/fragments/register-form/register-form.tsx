"use client";
import React from "react";
import { Formik, Form } from "formik";
import { registerSchema } from "./form-model/validation-schema";
import { initialValues } from "./form-model/initial-form";
import { IRegisterFormProps } from "./form-model/register.types";
import { FormikInput } from "@/components/molecules/formik_components/formik-input";
import { Button } from "@/components/atoms/button";

export const RegisterForm: React.FC<IRegisterFormProps> = ({
  isSubmitting,
  message,
  onSubmit,
}) => {
  return (
    <div>
      {message && <div>{message}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="flex flex-col border px-4 gap-2">
              <FormikInput name="fullname" label="Full Name" />
              <FormikInput name="username" label="Username" />
              <FormikInput name="email" label="Email" />
              <FormikInput name="phone" label="Phone" />
              <FormikInput name="password" label="Password" type="password" />
              <FormikInput
                name="confirm_password"
                label="Confirm Password"
                type="password"
              />
              <Button disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
