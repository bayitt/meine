"use client";

import { useRef, useState } from "react";
import { Card } from "@/src/components/Card";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Button } from "@/src/components/Button";
import { GiSelfLove } from "react-icons/gi";
import { Proposal } from "@/src/components/Proposal";
import { Header } from "@/src/components/Header";
import { cards } from "./cards";

export const Home = () => {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const cardContainer = useRef<HTMLDivElement | null>(null);

  const displayCards = () =>
    cards.map((card, index) => <Card key={index} {...card} />);

  const handleScroll = (dir: "left" | "right") => {
    if (!cardContainer.current) return;

    cardContainer.current.scrollLeft =
      dir == "left"
        ? cardContainer.current.scrollLeft - 200
        : cardContainer.current.scrollLeft + 200;
  };

  return (
    <div className="relative">
      <Header />
      <div
        className="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-6 mt-5 sm:mt-10 overflow-x-scroll !scroll-smooth cards pb-14 lg:pb-0"
        ref={cardContainer}
      >
        <div
          className="w-[50px] h-[50px] bg-[#F9EAE1] cursor-pointer shadow absolute hidden lg:flex justify-center items-center rounded-full z-10"
          style={{
            top: "calc((100% + 50px) / 2)",
            left: "-25px",
          }}
          onClick={() => handleScroll("left")}
        >
          <IoArrowBack />
        </div>
        {displayCards()}
        <div className="shrink-0 w-full lg:w-3/7 p-10 shadow rounded-[2px] border-[2px] border-[#CC8B86] border-dashed flex justify-center items-center">
          <Button handleClick={() => setIsProposalOpen(true)}>
            To My Love
            <GiSelfLove />
          </Button>
        </div>
        <div
          className="w-[50px] h-[50px] bg-[#F9EAE1] cursor-pointer shadow absolute hidden lg:flex justify-center items-center rounded-full z-10"
          style={{
            top: "calc((100% + 50px) / 2)",
            right: "-25px",
          }}
          onClick={() => handleScroll("right")}
        >
          <IoArrowForward />
        </div>
      </div>

      <Proposal
        isOpen={isProposalOpen}
        handleClose={() => setIsProposalOpen(false)}
      />
    </div>
  );
};
