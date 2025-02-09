import type { Meta, StoryObj } from "@storybook/react";
import Chip from "@/components/Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["to do", "done"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const ToDo: Story = {
  args: { type: "to do" },
};

export const Done: Story = {
  args: { type: "done" },
};
