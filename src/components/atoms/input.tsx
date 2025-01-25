import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className="relative pb-1 flex flex-col w-full">
    {label && <label className="text-sm mb-1">{label}</label>}
    <input
      className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      {...props}
    />
    {error && <span className="absolute bottom-0 right-3 px-1 bg-white text-red-500 text-xs">{error}</span>}
  </div>
);
