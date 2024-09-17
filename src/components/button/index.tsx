

function Button({ title, onClick, variant, color, size = "medium", sizeNum }: ButtonProps) {
  let style: any = {
    padding: "5px 10px"
  }
  if (variant === "outlined") {
    style = {
      ...style,
      backgroundColor: "grey",
      color: "green",
      border: "1px solid white",
      size: size
    }
  }
  if (variant === "contained") {
    style = {
      ...style,
      backgroundColor: "black",
      color: "white"
    }
  }
  if (sizeNum === "A1") {
    style = {
      ...style,
      borderRadius: "8px"
    }
  }
  if (sizeNum === "A2") {
    style = {
      ...style,
      borderRadius: "18px"
    }
  }
  return (
    <button
      style={style}
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