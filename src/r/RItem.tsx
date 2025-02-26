import { useState } from "react";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

interface Props {
  payload: Requirement;
  onDelete: (id: string) => void;
  onEdit: (targetRequirement: Requirement) => void;
}

const RItem = ({ onDelete, payload, onEdit }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const editHandler = () => setIsHovering((prev) => !prev);

  return (
    <li
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="border flex flex-col gap-y-1 p-2.5 rounded">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2.5 items-center">
            <p className="text-xl font-[600] ">{payload.title}</p>
            <p className="text-xs text-gray-500">{payload.manager}</p>
          </div>
          <p className="text-sm">{payload.status}</p>
        </div>
        <ul className="flex flex-col gap-y-1">
          {payload.descs.map((desc, index) => (
            <li className="flex" key={index}>
              <div className="text-xs bg-gray-50 rounded p-1 text-gray-700 hover:shadow-md flex gap-x-2">
                {desc}
              </div>
            </li>
          ))}
        </ul>
        {isHovering && (
          <div className="flex justfy-end gap-x-2.5">
            <button className={button}>
              <FaPen />
            </button>
            <button className={button}>
              <FaRegTrashCan />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default RItem;
const button =
  "h-8 w-8 rounded flex itema-center justify-center bg-gray-50 hover:opacity-80 text-gray-500 cursor-pointer text-xs";
