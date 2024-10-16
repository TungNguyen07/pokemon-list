import cn from "classnames";
import { TypeItemProps } from "./TypeItem.types";

const TypeItem = ({ type, isActive, onClick }: TypeItemProps) => {
  return (
    <li
      onClick={() => onClick(type)}
      className={cn(
        "border-2 border-gray-300 border-solid px-2 py-1 rounded font-semibold cursor-pointer",
        {
          "border-red-600 bg-red-100": isActive,
        }
      )}
    >
      {type.name}
    </li>
  );
};

export default TypeItem;
