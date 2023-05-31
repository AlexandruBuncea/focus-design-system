import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card (WIP 🚧 - Not ready for use)",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    mainAction: {
      control: {
        type: "text",
      },
    },
    secondaryAction: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "This is a card",
    description: "These are some lines about this card which is cool",
    mainAction: "Okay, it's cool",
    secondaryAction: "View more",
  },
};
