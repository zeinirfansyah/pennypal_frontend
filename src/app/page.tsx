"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/molecules/navbar";
import { RegisterForm } from "./_components/fragments/register-form/register-form";
import { IRegisterType } from "./_components/fragments/register-form/form-model/register.types";
import { AxiosError } from "axios";
import { register } from "@/services/auth-api";
import { useState } from "react";
import { LogInIcon, UserPenIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isGetStarted, setIsGetStarted] = useState(false);

  const handleSubmit = async (values: IRegisterType) => {
    setIsSubmitting(true);
    setMessage(null);
    try {
      await register(values);
      setIsLoginForm(true);
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

  console.log(isLoginForm);

  return (
    <>
      <Navbar />
      <main>
        <motion.div
          layout
          className={`min-h-[calc(100vh-12vh)] flex justify-center items-center text-sm lg:text-base`}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-4 w-full ">
            <div className="flex flex-col lg:flex-row gap-4 min-h-[calc(100vh-12vh)]">
              {!isGetStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center items-center lg:items-center text-center w-full"
                >
                  <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                    Simplify Your Finances, Achieve Your Goals.
                  </h1>
                  <p className="hidden lg:flex">
                    Take the first step toward financial freedom. Sign up for
                    free and start tracking today!
                  </p>
                  <Button
                    variant="filled_blue"
                    className="mt-4"
                    onClick={() => setIsGetStarted(true)}
                  >
                    Get Started
                  </Button>
                </motion.div>
              )}
              {isGetStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center items-center w-full"
                >
                  <div className="w-full lg:max-w-[500px] my-6 border rounded-lg flex flex-col gap-4">
                    <div className="flex flex-row border-b gap-1 rounded-t-lg justify-center items-center">
                      <div
                        onClick={() => setIsLoginForm(false)}
                        className={` ${
                          isLoginForm
                            ? "cursor-pointer"
                            : "bg-slate-100 cursor-default text-blue-500"
                        } flex gap-2 rounded-se-md hover:bg-slate-100 transition-all duration-300 w-full justify-center items-center py-4 `}
                      >
                        <UserPenIcon size={16} />
                        <h2 className="text-sm">Register</h2>
                      </div>
                      <div
                        onClick={() => setIsLoginForm(true)}
                        className={` ${
                          isLoginForm
                            ? "bg-slate-100 cursor-default text-blue-500"
                            : "cursor-pointer"
                        } flex gap-2 rounded-ss-md hover:bg-slate-100 transition-all duration-300 w-full justify-center items-center py-4 `}
                      >
                        <LogInIcon size={16} />
                        <h2 className="text-sm">Login</h2>
                      </div>
                    </div>
                    <div className="w-full px-6 pb-8 lg:min-w-[500px]">
                      {isLoginForm === false ? (
                        <motion.div
                          key={"register-form"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {message && (
                            <div className="text-sm text-red-500 flex justify-end">
                              {message}
                            </div>
                          )}
                          <RegisterForm
                            isSubmitting={isSubmitting}
                            message={message}
                            onSubmit={handleSubmit}
                          />
                          <div>
                            <span
                              className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                              onClick={() => setIsLoginForm(true)}
                            >
                              Already have an account?{" "}
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={"login-form"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h1 className="text-center">Login</h1>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
