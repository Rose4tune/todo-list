import type { Meta, StoryObj } from "@storybook/react";
import TodoAddBar from "@/components/TodoAddBar";

const MockStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 bg-gray-100">{children}</div>;
};

const meta: Meta<typeof TodoAddBar> = {
  title: "Components/TodoAddBar",
  component: TodoAddBar,
  tags: ["autodocs"],
  decorators: [(Story) => <MockStoreProvider>{<Story />}</MockStoreProvider>],
};

export default meta;
type Story = StoryObj<typeof TodoAddBar>;

export const Default: Story = {};
