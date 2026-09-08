"use client";

import { FC, useEffect, useState } from "react";
import confetti from "@hiseb/confetti";
import { Header } from "@/src/components/Header";
import { TRelationship } from "./types";
import { getTimeCount } from "@/src/utilities";

export const Relationship: FC<TRelationship> = ({
  startDate,
  years: initialYears,
  days: initialDays,
  hours: initialHours,
  minutes: initialMinutes,
  seconds: initialSeconds,
}) => {
  const [years, setYears] = useState(initialYears);
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    confetti({
      position: { x: window.innerWidth / 2, y: -10 },
      count: 200,
      size: 1,
      velocity: 200,
      fade: false,
    });

    const timeCountInterval = setInterval(() => {
      const { years, days, minutes, hours, seconds } = getTimeCount(startDate);
      setYears(years);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(timeCountInterval);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="grid grid-cols-12 pt-[3vh] pb-12 md:pb-0">
        <div className="col col-span-12 lg:col-span-6 order-2 lg:order-1 flex flex-col lg:justify-center">
          <p className="text-2xl/9 sm:text-3xl/11 sm:text-[2.4rem]/14 md:text-5xl/16 font-semibold text-center lg:text-left lg:w-4/5 mb-4 md:mb-8 lg:mb-[15vh]">
            <span className="underline">Olamileke</span> x{" "}
            <span className="underline">Stephanie</span>.<br /> Lovers.
            Partners.
          </p>

          <p className="text-md sm:text-lg leading-7 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique varius erat non tristique. Fusce faucibus dui non egestas
            rhoncus. Nulla fringilla feugiat ex ac consectetur. Quisque
            elementum auctor porta.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-8 sm:mb-10 md:mb-16 lg:mb-0">
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
