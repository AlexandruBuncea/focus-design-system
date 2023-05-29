import type { Meta, StoryObj } from "@storybook/react";
import Icon, { IconComponentProps } from "../components/Icon"; // <-- Import IconProps
import * as HeroIcons from "@heroicons/react/24/solid";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: Object.keys(HeroIcons),
      },
    },
    size: {
      control: {
        type: "select",
        options: ["20", "24"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: "CheckCircleIcon",
    size: "24",
  },
};

export const Small: Story = {
  args: {
    icon: "CheckCircleIcon",
    size: "20",
  },
};
