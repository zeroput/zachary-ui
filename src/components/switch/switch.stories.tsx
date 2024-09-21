import { useState } from "react";
import Switch from ".";
import { SwitchProps } from ".";

export default {
  title: "MY/Switch",
  component: Switch,
  tags: ["autodocs"],
};

const Template = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Basic = {
  args: {
    label: "Is Active ?",
    checked: false,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

