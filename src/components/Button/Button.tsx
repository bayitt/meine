import { FC } from "react";
import { TButton } from "./types";

export const Button: FC<TButton> = ({ children, handleClick }) => {
  return (
    <button className="outline-none border-none p-[14px] flex items-center gap-[6px] cursor-pointer rounded bg-[#7D4F50] text-white text-sm">
      {children}
    </button>
  );
};
