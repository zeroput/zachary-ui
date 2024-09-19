import React from "react";
import ThemeProvider from "../theme-provider";
import { ChevronDown, ChevronUp } from "lucide-react";
import classNames from "classnames";

function Select({
  value = "",
  onChange = () => {},
  options = [],
  name = "",
  placeholder = "",
  disabled = false,
  size = "medium",
  rounded = "none",
}: SelectProps) {
  const [showOptions, setShowOptions] = React.useState(false);

  let selectedOption = null;

  if (value) {
    selectedOption = options.find((option) => option.value === value);
  }

  let labelToShow = selectedOption ? (
    <div className="flex gap-2 items-center">
      {selectedOption.image && (
        <img
          src={selectedOption.image}
          alt={selectedOption.label}
          className="w-5 h-4 mr-2"
        />
      )}
      {selectedOption.label}
    </div>
  ) : (
    placeholder
  );

  return (
    <ThemeProvider>
      <div className="w-max">
        <div
          className={classNames(
            "border border-solid rounded-sm p-2 border-primary cursor-pointer px-3 flex justify-between items-center gap-7",
            {
              "bg-gray-100 pointer-events-none cursor-not-allowed": disabled,
            }
          )}
          onClick={() => setShowOptions(!showOptions)}
        >
          {labelToShow}

          <span>
            {showOptions ? (
              <ChevronUp size={15} className="text-primary" />
            ) : (
              <ChevronDown size={15} className="text-primary" />
            )}
          </span>
        </div>
        {showOptions && (
          <div className="flex flex-col gap-3 border border-gray-300 border-solid rounded-sm p-2 cursor-pointer mt-1">
            {options.map((option) => (
              <div
                className={classNames(
                  "hover:bg-gray-300 p-1 rounded flex items-center",
                  {
                    "bg-gray-300": option.value === value,
                  }
                )}
                onClick={() => {
                  onChange(option.value);
                  setShowOptions(false);
                }}
              >
                {option.image && (
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-5 h-4 mr-2"
                  />
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Select;

export interface SelectProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: Array<{
    label: string;
    value: string | number;
    image?: string;
  }>;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
}