"use client";
import { Navbar } from "@/components/molecules/navbar";
import { RegisterForm } from "./_components/fragments/register-form/register-form";
import { IRegisterType } from "./_components/fragments/register-form/form-model/register.types";
import { AxiosError } from "axios";
import { register } from "@/services/auth-api";
import { useState } from "react";
import { LogInIcon, UserPenIcon } from "lucide-react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoginForm, setIsLoginForm] = useState(false);

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
        <div className="min-h-[calc(100vh-20vh)] flex justify-center items-center text-sm lg:text-base">
          <div className="max-w-7xl mx-auto px-8 lg:px-4 w-full ">
            <div className="my-8 flex flex-col lg:flex-row gap-4">
              <div className="lg:flex flex-col justify-center items-center w-full lg:w-1/3 text-center lg:text-start">
                <h1 className="text-2xl lg:text-4xl font-semibold mb-4">
                  Simplify Your Finances, Achieve Your Goals.
                </h1>
                <p className="hidden lg:flex">
                  Take the first step toward financial freedom. Sign up for free
                  and start tracking today!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center lg:items-end w-full lg:w-2/3">
                <div className="w-full lg:max-w-[500px] my-6 border rounded-lg flex flex-col gap-4">
                  <div className="flex flex-row border-b gap-1 rounded-t-lg justify-center items-center">
                    <div
                      onClick={() => setIsLoginForm(true)}
                      className={` ${
                        isLoginForm
                          ? "bg-slate-100 cursor-default text-blue-500"
                          : "cursor-poiwnter"
                      } flex gap-2 rounded-ss-md hover:bg-slate-100 transition-all duration-300 w-full justify-center items-center py-4 `}
                    >
                      <UserPenIcon size={16} />
                      <h2 className="text-sm">Register</h2>
                    </div>
                    <div
                      onClick={() => setIsLoginForm(false)}
                      className={` ${
                        isLoginForm
                          ? "cursor-pointer"
                          : "bg-slate-100 cursor-default text-blue-500"
                      } flex gap-2 rounded-se-md hover:bg-slate-100 transition-all duration-300 w-full justify-center items-center py-4 `}
                    >
                      <LogInIcon size={16} />
                      <h2 className="text-sm">Login</h2>
                    </div>
                  </div>
                  <div className="w-full px-6 py-8 lg:min-w-[500px]">
                    {!isLoginForm === false ? (
                      <>
                        <RegisterForm
                          isSubmitting={isSubmitting}
                          message={message}
                          onSubmit={handleSubmit}
                        />
                        <div>
                          <span
                            className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => setIsLoginForm(false)}
                          >
                            Already have an account?{" "}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <h1 className="text-center">Login</h1>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
