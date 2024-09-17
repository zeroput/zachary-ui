

function Button({ title, onClick, variant, color, size = "medium", sizeNum }: ButtonProps) {
  let style: any = {
    padding: "5px 10px"
  }
  if (variant === "outlined") {
    style = {
      ...style,
      backgroundColor: "grey",
      color: "yellow",
      border: "1px solid white"
    }
  }
  if (variant === "contained") {
    style = {
      ...style,
      backgroundColor: "black",
      color: "white"
    }
  }
  // add the size prop
  if (size) {
    style = {
      ...style,
      size
    }
  }
  if (sizeNum === "A1") {
    style = {
      ...style,
      size: "big"
    }
  }
  if (sizeNum === "A2") {
    style = {
      ...style,
      size: "medium"
    }
  }
  return (
    <button
      style={style}
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