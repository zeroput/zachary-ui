import classNames from "classnames";

function Button({ title, onClick, variant = "contained", color, size = "medium", disabled, rounded = "none", iconNode, iconPos="right", loading=false}: ButtonProps) {
  return (
    <button
      className={classNames('py-2 px-5 cursor-pointer', {
        "border border-solid border-primary bg-white text-primary":
        variant === "outlined",
      "bg-primary text-white border-none": variant === "contained" && !disabled,
      "pointer-events-none bg-gray-300 border-none cursor-not-allowed text-gray-500":
        disabled,
      "h-8": size === "small",
      "h-10": size === "medium",
      "h-12": size === "large",
      "rounded-none": rounded === "none",
      "rounded-sm": rounded === "small",
      "rounded-md": rounded === "medium",
      "rounded-lg": rounded === "large",
      "rounded-full": rounded === "full",
      " pointer-events-none bg-grey border-none cursor-not-allowed ": disabled,
      "flex gap-5 items-center" : iconNode,
      "flex-row-reverse": iconNode && iconPos === "right"
      })}
      onClick={onClick}
    >
      {iconNode && iconNode}
      {title}
      {loading && (
          <div
            className={classNames(
              "w-2 h-2 border-[2px] border-solid border-t-transparent animate-spin rounded-full",
              {
                "border-white": variant === "contained",
                "border-primary": variant === "outlined",
              }
            )}
          ></div>
        )
      }
    </button>

  );
}

export default Button;

export interface ButtonProps {
  title: string;
  onClick: () => void;
  variant: "contained" | "outlined";
  color?: "blue" | "black";
  size?: "small" | "medium" | "large";
  sizeNum?: "A1" | "A2" | "A3";
  disabled?: boolean;
  rounded?: "none" | "small" | "medium" | "large" | "full",
  iconNode?: React.ReactNode,
  iconPos?: "left" | "right",
  loading?: boolean;

}