import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AddDefault: Story = { args: { type: "add", state: "default" } };
export const AddActive: Story = { args: { type: "add", state: "active" } };
export const DeleteDefault: Story = {
  args: { type: "delete", state: "default" },
};
export const DeleteActive: Story = {
  args: { type: "delete", state: "active" },
};
export const EditDefault: Story = {
  args: { type: "edit", state: "default" },
};
export const EditActive: Story = { args: { type: "edit", state: "active" } };
export const PlusDefault: Story = {
  args: { type: "plus", state: "default" },
};
export const PlusActive: Story = {
  args: { type: "plus", state: "active" },
};
export const Disabled: Story = {
  args: { type: "add", state: "active" },
};
