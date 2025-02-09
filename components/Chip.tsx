import clsx from "clsx";

interface ChipProps {
  type: "to do" | "done";
}

export default function Chip({ type }: ChipProps) {
  return (
    <div
      className={clsx(
        "chip flex items-center justify-center font-extra-16 transition-all",
        {
          "bg-lime-300 text-green-700": type === "to do",
          "bg-green-700 text-amber-300": type === "done",
        }
      )}
    >
      {type}
    </div>
  );
}
