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
      className=" bg-blue-600  h-[40vh] py-[3em] "
      style={{
        background: "url(/bg/tournermentbanner.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="w-[75%]  text-center mx-auto h-full">
        <div className="text-xl md:text-2xl kode_mono_font text-white mb-2">
          TOURNAMENT STARTS IN
        </div>
        <div className="flex font-bold kode_mono_font items-center justify-evenly text-3xl">
          <span>{timeRemaining.days}D</span>
          <span>{timeRemaining.hours}H</span>
          <span>{timeRemaining.minutes}M</span>
          <span>{timeRemaining.seconds}S</span>
        </div>

        {/*tilted button*/}
        <div className="p-8   ">
          <div className="relative inline-block">
            <button
              className="
            relative
            px-8
            py-3
            bg-white
            text-black
            font-mono
            kode_mono_font
            text-md
            rounded-xl
            transform
            rotate-12
            shadow-lg
            hover:-rotate-3
            hover:scale-105
            transition-all
            duration-300

          "
            >
              Join The Rumble
            </button>
            {/* Shadow element */}
            <div
              className="
          absolute
          inset-0
          bg-black/20
          rounded-xl
          transform
          -rotate-6
          translate-x-1
          translate-y-1
          -z-10
        "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
