import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { InboxArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    LeftIcon: {
      control: {
        type: "boolean",
      },
    },
    RightIcon: {
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon,
  },
};
