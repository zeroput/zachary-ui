import { useState } from "react";
import Select from ".";
import { SelectProps } from ".";

export default {
  title: "My/Select",
  component: Select,
//   tags: ["autodocs"], // generate the doc for this site
};

const Template = (args: SelectProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Select {...args} onChange={(value) => setValue(value)} value={value} />
  );
};

export const Basic = {
  args: {
    placeholder: "Select a country",
    options: [
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
    ],
    onChange: (value: string) => console.log(value),
  },
  render: Template,
} as { args: SelectProps };

export const Advanced = {
  args: {
    placeholder: "Select a country",
    options: [
      {
        label: "India",
        value: "india",
        image:
          "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
      },
      {
        label: "USA",
        value: "usa",
        image:
          "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
      },
      {
        label: "UK",
        value: "uk",
        image:
          "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
      },
      {
        label: "Canada",
        value: "canada",
        image:
          "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
      },
    ],
    onChange: (value: string) => console.log(value),
  },
  render: Template,
} as { args: SelectProps };