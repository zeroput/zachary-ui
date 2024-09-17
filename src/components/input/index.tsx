import React from "react";
function InputField({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
  error,
  name,
  size = "medium",
  border = "rounded",
}: InputFieldProps) {
  return (
    <div>
      <label>{name}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
      />
    </div>

  );
}

export default InputField;

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "number";
  disabled?: boolean;
  error?: boolean;
  name?: string;
  size?: "small" | "medium" | "large";
  border?: "rounded" | "none";
}