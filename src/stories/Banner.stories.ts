import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "../components/Banner";
import {
  CheckCircleIcon,
  MegaphoneIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

const meta: Meta<typeof Banner> = {
  title: "Components/Banners",
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["positive", "info", "warning", "danger", "announcement"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Positive: Story = {
  args: {
    variant: "positive",
    content: "This is a positive banner",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    content: "This is an info banner",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    content: "This is a warning banner",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    content: "This is a danger banner",
  },
};

export const Announcement: Story = {
  args: {
    variant: "announcement",
    content: "This is an announcement banner",
  },
};
