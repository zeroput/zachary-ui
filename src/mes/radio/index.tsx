import classNames from "classnames";
import React from "react";

function Radio({
  value = "",
  onChange = () => {},
  options = [],  
  label = "",
  disabled = false,
  size = "medium",
  orientation = "horizontal",
}: RadioProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm">{label}</span>

      <div
        className={classNames("flex gap-5", {
          "flex-col": orientation === "vertical",
          "pointer-events-none cursor-not-allowed": disabled,
        })}
      >
        {options.map((option) => (
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            <div
              className={classNames(
                "w-4 h-4 border border-solid rounded-full box-border",
                {
                  "border-primary": option.value === value && !disabled,
                  "border-gray-300": disabled,
                  "border-[5px] ": option.value === value,
                }
              )}
            ></div>
            <span
              className={classNames("mt-[2px]", {
                "text-gray-500": disabled,
                "text-sm": size === "small",
                "text-base": size === "medium",
                "text-xl": size === "large",
              })}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Radio;

export interface RadioProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: Array<{
    label: string;
    value: string | number;
  }>;
  label?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  orientation?: "horizontal" | "vertical";
}
