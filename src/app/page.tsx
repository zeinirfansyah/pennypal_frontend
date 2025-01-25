"use client";
import { Navbar } from "@/components/molecules/navbar";
import { RegisterForm } from "./_components/fragments/register-form/register-form";
import { IRegisterType } from "./_components/fragments/register-form/form-model/register.types";
import { AxiosError } from "axios";
import { register } from "@/services/auth-api";
import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (values: IRegisterType) => {
    setIsSubmitting(true);
    setMessage(null);
    try {
      const response = await register(values);
      setMessage(response.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An error occurred.";
        setMessage(errorMessage);
      } else {
        setMessage("An error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="min-h-screen flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-4 w-full ">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="hidden lg:flex flex-col justify-center items-center w-full lg:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Welcome to Pennypal</h1>
              </div>
              <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
                <RegisterForm
                  isSubmitting={isSubmitting}
                  message={message}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
