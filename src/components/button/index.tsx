

function Button({ title, onClick, variant, color, size = "medium" }: ButtonProps) {
  return (
    <button
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
}