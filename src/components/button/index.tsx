function Button({ title, onClick, variant, color, size = "medium", sizeNum }: ButtonProps) {
  let clsName = "py-2 px-5 cursor-pointer";

  if (variant === "contained"){
    clsName += " border border-solid border-black bg-white text-black "
  }
  if (variant === "outlined"){
    clsName += " bg-black text-white"
  }
  return (
    <button
      className={clsName}
      onClick={onClick}
    >
      {title}
    </button>

  );
}

export default Button;

export interface ButtonProps {
  title: string;
  onClick: () => void;
  variant: "contained" | "outlined";
  color?: "red" | "black";
  size?: "small" | "medium" | "large";
  sizeNum?: "A1" | "A2" | "A3"
}