import { FC } from "react";
import { TProposal } from "./types";
import { Button } from "../Button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const Proposal: FC<TProposal> = ({ isOpen, handleClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.3)] transition-opacity duration-400 ${
        isOpen ? "opacity-100 z-20" : "opacity-0 -z-20"
      }`}
      onClick={(e) => {
        handleClose();
        e.stopPropagation();
      }}
    >
      <div className="w-[700px] bg-white flex flex-row-reverse p-4">
        <div className="w-2/3 pt-10 px-8 flex flex-col gap-5 text-[rgba(0,0,0,0.9)] text-[0.95rem]">
          <p className="text-2xl font-semibold">Will You Be My Girlfriend ?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique varius erat non tristique. Fusce faucibus dui non egestas
            rhoncus.
          </p>
          <Button handleClick={() => {}} classes="flex justify-center w-fit">
            Absolutely, Yes
          </Button>
          <p>
            There is no option for you to say no because well, I am not letting
            you say no. It's you and me baby 😏.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/olamileke/image/upload/v1788433843/meine/image_uxay6e.jpg"
          className="w-1/3 h-[320px] object-fit"
        />
      </div>
    </div>
  );
};
