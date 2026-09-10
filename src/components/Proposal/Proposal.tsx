import { FC } from "react";
import { TProposal } from "./types";
import { Button } from "../Button";
import { recordRelationshipStart } from "./actions";

export const Proposal: FC<TProposal> = ({ isOpen, handleClose }) => {
  const handleProposalResponse = async () => {
    await recordRelationshipStart();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.3)] transition-opacity duration-400 ${
        isOpen ? "opacity-100 z-20" : "opacity-0 -z-20"
      }`}
      onClick={() => {
        handleClose();
      }}
    >
      <div
        className="w-[90%] sm:w-[85%] lg:w-[700px] bg-white flex flex-col sm:flex-row p-5 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="https://res.cloudinary.com/olamileke/image/upload/v1788970007/meine/image_1_kihrhj.jpg"
          className="sm:w-1/3 h-[270px] sm:h-[320px] mb-5 sm:mb-0 object-cover"
        />
        <div className="w-full md:w-2/3 sm:pt-10 sm:pl-8 sm:pr-10 flex flex-col items-center gap-3 sm:gap-5 text-[rgba(0,0,0,0.9)] text-[0.9rem]">
          <p className="text-xl sm:text-2xl font-semibold">
            Will You Be My Girlfriend ?
          </p>
          <p className="text-center">
            I've had a taste of what love is with you and I want more, I want
            you, all of you, in the highs and the lows.
          </p>
          <Button
            handleClick={handleProposalResponse}
            classes="flex justify-center w-fit"
          >
            Absolutely, Yes
          </Button>
          <p className="text-center">
            There is no option for you to say no because well, I am not taking a
            no from you. It's you and me baby 😏.
          </p>
        </div>
      </div>
    </div>
  );
};
