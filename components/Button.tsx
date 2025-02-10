import clsx from "clsx";

interface ButtonProps {
  type: "add" | "delete" | "editComplete" | "plus" | "edit";
  response?: boolean;
  isChanged?: boolean;
  onClick?: () => void;
}

const buttonIconRoot = "/image/icon/";
const buttonStyles = {
  add: {
    default: "bg-slate-200 text-slate-900",
    active: "bg-violet-600 text-white hover:bg-violet-700",
  },
  editComplete: {
    default: "bg-slate-200 text-black",
    active: "bg-lime-300 text-black hover:bg-lime-400",
  },
  delete: {
    default: "bg-rose-500 text-white hover:bg-rose-600",
    active: "",
  },
  plus: {
    default: "bg-slate-800 text-white hover:bg-slate-900",
    active: "",
  },
};

export default function Button({
  type,
  response = false,
  isChanged = false,
  onClick,
}: ButtonProps) {
  const thisStyle = buttonStyles[type as keyof typeof buttonStyles];
  const isDisabled =
    (type === "add" && !response) || (type === "editComplete" && !isChanged);

  return (
    <button
      className={clsx(
        "button flex items-center justify-center font-bold-16 transition-all gap-2",
        isChanged ? thisStyle.active : thisStyle.default,
        isDisabled && "cursor-not-allowed bg-slate-200"
      )}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {type !== "plus" && (
        <img
          className="button-icon"
          src={`${buttonIconRoot + type}.svg`}
          alt={type}
        />
      )}
      <span className={clsx({ "hidden md:inline": type === "add" })}>
        {type === "add"
          ? "추가하기"
          : type === "delete"
            ? "삭제하기"
            : type === "editComplete"
              ? "수정 완료"
              : ""}
      </span>
    </button>
  );
}
