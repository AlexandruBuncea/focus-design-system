import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton";
import * as HeroIcons from "@heroicons/react/24/solid";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "ghost", "danger"],
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      control: {
        type: "select",
        options: Object.keys(HeroIcons),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    icon: "CheckCircleIcon",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: "CheckCircleIcon",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    icon: "CheckCircleIcon",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    icon: "CheckCircleIcon",
  },
};
