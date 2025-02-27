import { FaRegTrashCan } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

export type DescsProps = {
  li?: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >;
  div?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  button?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  setRequirement: setRequirement;
  requirement: Requirement;
  index: number;
  d: string;
};

const DescsMAp = ({
  requirement,
  setRequirement,
  button,
  div,
  li,
  index,
  d,
}: DescsProps) => {
  return (
    <li {...li} className={twMerge("flex", li?.className)}>
      <div
        {...div}
        className={twMerge(
          "text-xs bg-gray-50 rounded p-1 text-gray-700 hover:shadow-md flex gap-x-2",
          div?.className
        )}
      >
        {index + 1}. {d}
        <button
          {...button}
          type="button"
          className={twMerge(
            "cursor-pointer hover:text-red-500",
            button?.className
          )}
          onClick={() => {
            const descs = [...requirement.descs];

            descs.splice(index, 1);

            setRequirement((prev) => ({ ...prev, descs }));
          }}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
};

export default DescsMAp;
