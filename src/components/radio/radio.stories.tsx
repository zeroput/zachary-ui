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
    label: "Singapore",
    value: "singapore",
  },
  {
    label: "India",
    value: "india",
  },
  {
    label: "USA",
    value: "usa",
  },
  {
    label: "UK",
    value: "uk",
  },
  {
    label: "Canada",
    value: "canada",
  },
];

export const Basic = {
  args: {
    label: "Select country",
    options: countryInfo
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
