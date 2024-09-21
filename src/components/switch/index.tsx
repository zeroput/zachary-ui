import classNames from "classnames";
import React from "react";

function Switch({
  label = "",
  checked,
  onChange,
  disabled = false,
  orientation = "vertical",
}: SwitchProps) {
  return (
    <div
      className={classNames("flex gap-1", {
        "flex-row items-center": orientation === "horizontal",
        "flex-col": orientation === "vertical",
      })}
    >
      <span className="text-sm">{label}</span>

      <div
        className={classNames(
          "bg-gray-400 w-10 p-1 rounded-full flex cursor-pointer",
          {
            "bg-primary justify-end": checked,
            "opacity-50 pointer-events-none cursor-not-allowed": disabled,
          }
        )}
        onClick={() => onChange(!checked)}
      >
        <div className="w-4 h-4 rounded-full bg-white"></div>
      </div>
    </div>
  );
}

export default Switch;

export interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
}
