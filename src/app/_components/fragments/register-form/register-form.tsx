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
  onSubmit,
}) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <>
            <Form>
              <div className="w-full flex flex-col py-2 gap-2">
                <FormikInput name="fullname" label="Full Name" />
                <FormikInput name="username" label="Username" />
                <div className="flex flex-col lg:flex-row gap-2">
                  <FormikInput name="email" label="Email" />
                  <FormikInput name="phone" label="Phone" />
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <FormikInput
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <FormikInput
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                  />
                </div>
                <Button disabled={isSubmitting} className="text-sm my-2">
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
