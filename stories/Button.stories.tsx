import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["add", "delete", "editComplete", "plus", "edit"],
    },
    response: { control: "boolean" },
    isChanged: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "add",
  },
};

export const AddButton: Story = {
  args: {
    type: "add",
  },
};
export const AddButtonActive: Story = {
  args: {
    type: "add",
    response: true,
  },
};

export const DeleteButton: Story = {
  args: {
    type: "delete",
  },
};

export const EditCompleteButton: Story = {
  args: {
    type: "editComplete",
  },
};
export const EditCompleteChanged: Story = {
  args: {
    type: "editComplete",
    isChanged: true,
  },
};

export const PlusButton: Story = {
  args: {
    type: "plus",
  },
};
