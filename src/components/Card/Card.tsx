import { FC } from "react";
import { TCard } from "./types";

export const Card: FC<TCard> = ({ image, text }) => {
  return (
    <div className="bg-white shrink-0 w-full lg:w-3/7 p-6 sm:p-10 shadow rounded-[2px] border-[2px] border-[#CC8B86] border-dashed">
      <img
        src={image}
        className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover mb-3 sm:mb-5"
      />
      <p className="text-[0.92rem]/7 text-[rgba(0,0,0,0.9)] mb-1">{text}</p>
    </div>
  );
};
