import { useState } from "react";
import Radio from ".";
import { RadioProps } from ".";

export default {
  title: "MY/Radio",
  component: Radio,  
};

const Template = (args: RadioProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Radio
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

const countryInfo = [
  {
    label: "Please confirm Mfg Line",
    value: "mfg Line",
  },
  {
    label: "Please confirm mfg Order",
    value: "mfg Order",
  },
  {
    label: "Please confirm Mfg Spec",
    value: "mfg Spec",
  },
  {
    label: "Please confirm Mfg Type",
    value: "mfg Type",
  },
];

export const Basic = {
  args: {
    label: "Select country",
    options: countryInfo,
    orientation: "vertical"
  },
  render: Template,
} as { args: RadioProps };

export const Disabled = {
  args: {
    label: "Select country",
    options: countryInfo,
    disabled: true,
  },
  render: Template,
} as { args: RadioProps };
