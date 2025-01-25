import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void | null | undefined;
  disabled?: boolean;
  variant?:
    | "filled_blue"
    | "filled_red"
    | "filled_green"
    | "filled_gray"
    | "filled_disabled"
    | "link_blue"
    | "link_red"
    | "link_green"
    | "link_gray"
    | "link_disabled"
    | "outlined_blue"
    | "outlined_red"
    | "outlined_green"
    | "outlined_gray"
    | "outlined_disabled";
}

export const Button = ({
  children,
  onClick,
  className,
  variant = "filled_blue",
  disabled = false,
}: IButtonProps) => {
  const variants = {
    filled_blue: "text-white  bg-blue-500 hover:bg-blue-700",
    filled_red: "text-white bg-red-500 hover:bg-red-700",
    filled_green: "text-white bg-green-500 hover:bg-green-700",
    filled_gray: "text-white bg-gray-500 hover:bg-gray-700",
    filled_disabled: "cursor-not-allowed text-white bg-gray-500 ",
    link_blue: "text-blue-500 hover:text-blue-700",
    link_red: "text-red-500 hover:text-red-700",
    link_green: "text-green-500 hover:text-green-700",
    link_gray: "text-gray-500 hover:text-gray-700",
    link_disabled: "cursor-not-allowed text-gray-500",
    outlined_blue:
      "text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white",
    outlined_red:
      "text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white",
    outlined_green:
      "text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white",
    outlined_gray:
      "text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white",
    outlined_disabled:
      "cursor-not-allowed text-gray-500 border-2 border-gray-500 hover:bg-gray-500",
  };

  return (
    <>
      <button
        onClick={
          variant === "filled_disabled" ||
          variant === "link_disabled" ||
          variant === "outlined_disabled"
            ? undefined
            : onClick
        }
        className={`${className} ${variants[variant]} ${
          disabled ? "cursor-not-allowed" : ""
        } rounded px-4 py-2 transition-all duration-300 w-full lg:w-auto`}
      >
        {children}
      </button>
    </>
  );
};
