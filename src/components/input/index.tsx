import classNames from "classnames";
import React from "react";
import ThemeProvider from "../theme-provider";

function Input({
  value,
  onChange,
  name = "",
  placeholder = "",
  label = "",
  disabled = false,
  type = "text",
  size = "medium",
  rounded = "none",
  error = "",
}: InputProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col w-max gap-1">
        <label htmlFor="input" className="text-sm">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={classNames("px-5 border-solid", {
            "h-10": size === "medium",
            "h-8": size === "small",
            "h-12": size === "large",
            "rounded-none": rounded === "none",
            "rounded-sm": rounded === "small",
            "rounded-md": rounded === "medium",
            "rounded-lg": rounded === "large",
            "rounded-full": rounded === "full",
            'border-primary focus:outline-none' : !disabled,
            "border border-red-500 border-solid": error,
            "cursor-not-allowed pointer-events-none bg-opacity-50": disabled,
          })}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </ThemeProvider>
  );
}

export default Input;

export interface InputProps {
  value: string | number;
  onChange: (value: string | number) => void;
  name?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: "text" | "number" | "password";
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  error?: string;
}