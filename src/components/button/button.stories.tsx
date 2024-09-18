import Button from ".";
import { ButtonProps } from ".";
import { User } from 'lucide-react'

export default {
    title: "My/Button",
    component: Button,
}

export const Contained = {
    args: {
        title: "CLick me",
        variant: "contained"
    }
} as { args: ButtonProps };

export const Outlined = {
    args: {
        title: "CLick me",
        variant: "outlined"
    }
} as { args: ButtonProps }

export const Small = {
    args: {
        title: "CLick me",
        variant: "outlined",
        size: "small"
    }
} as { args: ButtonProps }

export const Medium = {
    args: {
        title: "CLick me",
        variant: "outlined",
        size: "medium"
    }
} as { args: ButtonProps }

export const LargeP = {
    args: {
        title: "CLick me",
        variant: "outlined",
        color: "black",
        rounded: "full"
    }
} as { args: ButtonProps }

export const TestBtn = {
    args: {
        title: "CLick me",
        variant: "outlined",
        disabled: false,
        color: "blue",
        size: "small",
        sizeNum: "A1",
        rounded: "full",
        iconPos: "left"
    }
} as {
    args: ButtonProps;
};


export const BtnWithIcon = {
    args: {
        title: "CLick It",
        variant: "outlined",
        disabled: false,
        rounded: "full",
        iconPos: "left",
        iconNode: <User 
        size={20} />,
        loading: true
    }
} as {
    args: ButtonProps;
};