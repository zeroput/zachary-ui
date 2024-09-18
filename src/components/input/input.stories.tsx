import Input from ".";
import { InputProps } from ".";

export default {
    title: "My/Input",
    component: Input
}


export const Basic = {
    args: {
        label: "Username",
        placeholder: "Enter your username",
        rounded: "full"
    },
} as { args: InputProps };

export const Large = {
    args: {
        label: "Username",
        placeholder: "Enter your username",
        rounded: "large",
        name: "",
        value: "Tom Basic",
        type: "text",
        size: "large"
    }
} as {
    args: InputProps;
};

export const Disabled = {
    args: {
        label: "Username",
        placeholder: "Enter your username",
        rounded: "large",
        name: "",
        value: "Tom Basic",
        type: "text",
        size: "large",
        disabled: true
    }
} as {
    args: InputProps;
};