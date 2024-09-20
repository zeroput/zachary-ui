import classNames from "classnames";
import ThemeProvider from "../theme-provider";

// 定义Button组件，接收多个属性作为参数
function Button({ title, onClick, variant = "contained", color, size = "medium", disabled, rounded = "none", iconNode, iconPos="right", loading=false}: ButtonProps) {
  return (
    <ThemeProvider>
      <button
      // 使用classNames函数动态生成按钮的类名
      className={classNames('py-2 px-5 cursor-pointer', {
        // 当variant为"outlined"时，应用边框样式
        "border border-solid border-primary bg-white text-primary":
        variant === "outlined",
        // 当variant为"contained"且按钮未禁用时，应用填充样式
      "bg-primary text-white border-none": variant === "contained" && !disabled,
        // 当按钮被禁用时，应用禁用样式
      "pointer-events-none bg-gray-300 border-none cursor-not-allowed text-gray-500":
        disabled,
      "h-8": size === "small",  // 小尺寸按钮高度
      "h-10": size === "medium",  // 中等尺寸按钮高度
      "h-12": size === "large",  // 大尺寸按钮高度
      "rounded-none": rounded === "none",  // 无圆角
      "rounded-sm": rounded === "small",  // 小圆角
      "rounded-md": rounded === "medium",  // 中等圆角
      "rounded-lg": rounded === "large",  // 大圆角
      "rounded-full": rounded === "full",  // 完全圆形
      " pointer-events-none bg-grey border-none cursor-not-allowed ": disabled,  // 禁用状态样式
      "flex gap-5 items-center" : iconNode,  // 当有图标时，使用flex布局
      "flex-row-reverse": iconNode && iconPos === "right"  // 当图标在右侧时，反转flex方向
      })}
      onClick={onClick}  // 设置点击事件处理函数
    >
      {iconNode && iconNode}
      {title}
      {loading && (  // 如果处于加载状态，则渲染加载动画
          <div
            // 使用classNames函数动态生成加载动画的类名
            className={classNames(
              "w-2 h-2 border-[2px] border-solid border-t-transparent animate-spin rounded-full",
              {
                "border-white": variant === "contained",  // 填充样式时使用白色边框
                "border-primary": variant === "outlined",  // 轮廓样式时使用主色边框
              }
            )}
          ></div>
        )
      }
    </button>
    </ThemeProvider>
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