import { useState, useEffect } from "react";
import Button from "../button";

const CountDown = () => {
  const targetDate = new Date("2024-12-31T00:00:00Z").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className=" bg-blue-600 w-full h-[50vh] py-[5em] "
      style={{
        background: "url(/bg/tournermentbanner.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[75%]  text-center mx-auto h-full">
        <div className="mb-2 text-xl text-white md:text-2xl kode_mono_font">
          TOURNAMENT STARTS IN
        </div>
        <div className="flex items-center text-3xl font-bold kode_mono_font justify-evenly">
          <span>{timeRemaining.days}D</span>
          <span>{timeRemaining.hours}H</span>
          <span>{timeRemaining.minutes}M</span>
          <span>{timeRemaining.seconds}S</span>
        </div>

        {/*tilted button*/}
        <div className="py-[5.5em] ">
          <div className="relative inline-block -right-[2.5rem]">
            <button
              className="relative  px-8 py-4 font-mono
                text-black transition-all duration-300 transform
                 bg-white border-[1.8px] border-black
                 kode_mono_font text-md rounded-xl rotate-12
                 shadow-inner
                hover:-rotate-3 hover:scale-105"
            >
              Join The Rumble
            </button>
            {/* Shadow element */}
            <div className="absolute  inset-0 transform translate-x-1 translate-y-1 bg-black/20 rounded-xl -rotate-6 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
