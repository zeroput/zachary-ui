import { useState } from "react";
import Radio from ".";
import { RadioProps } from ".";

export default {
  title: "MES/Radio",
  component: Radio,
  // tags: ["autodocs"],
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

const options = [
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
    options
  },
  render: Template,
} as { args: RadioProps };

export const VerticalOptions = {
  args: {
    label: "Select country",
    options,
    orientation: "vertical",
    size: "medium"
  },
  render: Template,
} as { args: RadioProps };

export const Disabled = {
  args: {
    label: "Select country",
    options,
    disabled: true,
  },
  render: Template,
} as { args: RadioProps };

export const LargeSize = {
  args: {
    label: "Select country",

    options: [{
      "label": "Singapore",
      "value": "singapore"
    }, {
      "label": "India",
      "value": "india"
    }, {
      "label": "USA",
      "value": "usa"
    }, {
      "label": "UK",
      "value": "uk"
    }, {
      "label": "Canada",
      "value": "canada"
    }],

    disabled: false,
    size: "large"
  },

  render: Template
} as {
  args: RadioProps;
};