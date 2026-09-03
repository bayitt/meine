"use client";

import { useRef, useState } from "react";
import { Card, TCard } from "@/src/components/Card";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Button } from "@/src/components/Button";
import { GiSelfLove } from "react-icons/gi";
import { Proposal } from "@/src/components/Proposal";
import { Header } from "@/src/components/Header";

export default function Home() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const cardContainer = useRef<HTMLDivElement | null>(null);
  const image =
    "https://res.cloudinary.com/olamileke/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1788372370/meine/12095_hel8ti.jpg";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique varius erat non tristique. Fusce faucibus dui non egestas rhoncus. Nulla fringilla feugiat ex ac consectetur. Quisque elementum auctor porta. Suspendisse potenti. Nullam eu viverra leo. Vestibulum tempor nulla ac quam laoreet ullamcorper. Aenean tincidunt, risus sit amet cursus iaculis, ex orci imperdiet dolor, id accumsan neque arcu eu nulla. Aliquam luctus nibh at tortor pulvinar sodales.";
  const cards: TCard[] = [
    { image, text },
    { image, text },
    { image, text },
    { image, text },
  ];

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
        className="flex gap-6 mt-10 overflow-x-scroll !scroll-smooth cards"
        ref={cardContainer}
      >
        <div
          className="w-[50px] h-[50px] bg-[#F9EAE1] cursor-pointer shadow absolute flex justify-center items-center inline-flex rounded-full z-10"
          style={{
            top: "calc((100% + 50px) / 2)",
            left: "-25px",
          }}
          onClick={() => handleScroll("left")}
        >
          <IoArrowBack />
        </div>
        {displayCards()}
        <div className="shrink-0 w-3/7 p-10 shadow rounded-[2px] border-[2px] border-[#CC8B86] border-dashed flex justify-center items-center">
          <Button handleClick={() => setIsProposalOpen(true)}>
            To My Love
            <GiSelfLove />
          </Button>
        </div>
        <div
          className="w-[50px] h-[50px] bg-[#F9EAE1] cursor-pointer shadow absolute flex justify-center items-center inline-flex rounded-full z-10"
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
}
