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

// 기본 버튼
export const Default: Story = {
  args: {
    type: "add",
  },
};

// 추가하기 버튼 (기본 & 활성화)
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

// 삭제 버튼
export const DeleteButton: Story = {
  args: {
    type: "delete",
  },
};

// 수정 완료 버튼 (기본 & 변경됨)
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

// 플러스 버튼
export const PlusButton: Story = {
  args: {
    type: "plus",
  },
};
