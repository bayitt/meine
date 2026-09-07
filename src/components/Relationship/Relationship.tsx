"use client";

import { FC, useEffect, useState } from "react";
import confetti from "@hiseb/confetti";
import { Header } from "@/src/components/Header";

import { TRelationship } from "./types";

export const Relationship: FC<TRelationship> = ({ startDate }) => {
  useEffect(() => {
    confetti({
      position: { x: window.innerWidth / 2, y: -10 },
      count: 200,
      size: 1,
      velocity: 200,
      fade: false,
    });

    const timeCountInterval = setInterval(() => {
      getTimeCount();
    }, 1000);

    return () => {
      clearInterval(timeCountInterval);
    };
  }, []);

  const getTimeCount = () => {
    const interval = new Date().getTime() - startDate.getTime();
    const years = Math.floor(interval / (365 * 24 * 60 * 60 * 1000));
    const days = Math.floor(
      (interval % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );
    const hours = Math.floor(
      (interval % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor((interval % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((interval % (60 * 1000)) / 1000);

    const parseNumber = (time: number) => {
      let parsedTime = time.toString();
      return parsedTime.length > 1 ? parsedTime : "0" + parsedTime;
    };

    setYears(parseNumber(years));
    setDays(parseNumber(days));
    setHours(parseNumber(hours));
    setMinutes(parseNumber(minutes));
    setSeconds(parseNumber(seconds));
  };

  const [years, setYears] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  return (
    <>
      <Header />
      <section className="grid grid-cols-12 pt-[3vh] pb-12 md:pb-0">
        <div className="col col-span-12 lg:col-span-6 order-2 lg:order-1">
          <p className="text-3xl/11 sm:text-[2.4rem]/14 md:text-5xl/16 font-semibold text-center lg:text-left lg:w-4/5 mb-4 md:mb-8 lg:mb-[15vh]">
            <span className="underline">Olamileke</span> x{" "}
            <span className="underline">Stephanie</span>.<br /> Lovers.
            Partners.
          </p>

          <p className="text-lg text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique varius erat non tristique. Fusce faucibus dui non egestas
            rhoncus. Nulla fringilla feugiat ex ac consectetur. Quisque
            elementum auctor porta.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-5 sm:mb-10 lg:mb-0">
          <div className="lg:w-[75%] relative lg:left-[25%] p-5 bg-white shadow border-[2px] border-[#CC8B86] border-dashed">
            <img
              src="https://res.cloudinary.com/olamileke/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1788450367/meine/IMG_6907_jc2dg0.jpg"
              className="h-[300px] sm:h-[500px] lg:h-[300px] w-full object-cover mb-5"
            />

            <div className="flex flex-col items-center">
              <p className="mb-3 w-fit">We've Been Dating For</p>

              <span className="w-1/3 h-[2px] bg-[#7D4F50] mb-5" />

              <div className="flex gap-7 justify-center">
                <div>
                  <p className="text-2xl text-[#7D4F50] text-center font-semibold">
                    {years}
                  </p>
                  <span className="text-[0.6rem]">YEARS</span>
                </div>
                <div>
                  <p className="text-2xl text-[#7D4F50] text-center font-semibold">
                    {days}
                  </p>
                  <span className="text-[0.6rem]">DAYS</span>
                </div>
                <div>
                  <p className="text-2xl text-[#7D4F50] text-center font-semibold">
                    {hours}
                  </p>
                  <span className="text-[0.6rem]">HOURS</span>
                </div>
                <div>
                  <p className="text-2xl text-[#7D4F50] text-center font-semibold">
                    {minutes}
                  </p>
                  <span className="text-[0.6rem]">MINUTES</span>
                </div>
                <div>
                  <p className="text-2xl text-[#7D4F50] text-center font-semibold">
                    {seconds}
                  </p>
                  <span className="text-[0.6rem]">SECONDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
