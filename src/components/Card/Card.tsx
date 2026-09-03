import { FC } from "react";
import { TCard } from "./types";

export const Card: FC<TCard> = ({ image, text }) => {
  return (
    <div className="bg-white shrink-0 w-3/7 p-10 shadow rounded-[2px] border-[2px] border-[#CC8B86] border-dashed">
      <img src={image} className="w-20 h-20 rounded-full object-cover mb-5" />
      <p className="text-[0.92rem]/7 text-[rgba(0,0,0,0.9)] mb-3">{text}</p>
    </div>
  );
};
