"use client";

import { useEffect } from "react";
import confetti from "@hiseb/confetti";
import { Header } from "@/src/components/Header";

export default function InARelationship() {
  useEffect(() => {
    confetti({
      position: { x: window.innerWidth / 2, y: -10 },
      count: 200,
      size: 1,
      velocity: 200,
      fade: false,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="grid grid-cols-12 pt-[3vh]">
        <div className="col col-span-6">
          <p className="text-5xl/16 font-semibold w-4/5 mb-[15vh]">
            <span className="underline">Olamileke</span> x{" "}
            <span className="underline">Stephanie</span>.<br /> Lovers.
            Partners.
          </p>

          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique varius erat non tristique. Fusce faucibus dui non egestas
            rhoncus. Nulla fringilla feugiat ex ac consectetur. Quisque
            elementum auctor porta.
          </p>
        </div>

        <div className="col-span-6">
          <div className="w-[75%] relative left-[25%] p-5 bg-white shadow border-[2px] border-[#CC8B86] border-dashed">
            <img
              src="https://res.cloudinary.com/olamileke/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1788450367/meine/IMG_6907_jc2dg0.jpg"
              className="h-[300px] w-full object-cover mb-5"
            />

            <div>
              <p>We've known each other for</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
