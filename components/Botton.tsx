import React from "react";
import clsx from "clsx";

interface ButtonProps {
  type: "add" | "delete" | "editComplete" | "plus" | "edit";
  state?: "default" | "active";
  response?: boolean;
  isChanged?: boolean;
  onClick?: () => void;
}

export default function Button({
  type,
  state,
  response = false,
  isChanged = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 px-4 py-2 font-bold-16 transition-all rounded-md shadow-md",
        {
          "bg-violet-100 text-slate-900 hover:bg-violet-200":
            type === "add" && state === "default",
          "bg-lime-300 text-black hover:bg-lime-400":
            type === "editComplete" && state === "default",

          "bg-violet-600 text-white hover:bg-violet-700":
            type === "add" && (state === "active" || response),
          "bg-rose-500 text-white hover:bg-rose-600": type === "delete",
          "bg-lime-600 text-black hover:bg-lime-700":
            type === "editComplete" && isChanged,
          "bg-slate-800 text-white hover:bg-slate-900": type === "plus",

          "opacity-50 cursor-not-allowed":
            (type === "add" && !response) ||
            (type === "editComplete" && !isChanged),
        }
      )}
      onClick={type === "delete" || response || isChanged ? onClick : undefined}
      disabled={
        (type === "add" && !response) || (type === "editComplete" && !isChanged)
      }
    >
      {type === "add" && "➕ 추가하기"}
      {type === "delete" && "✖ 삭제하기"}
      {type === "editComplete" && "✔ 수정 완료"}
      {type === "plus" && "➕"}
    </button>
  );
}
