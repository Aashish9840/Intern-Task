"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const FirstComponent = () => {
  const [showSlider, setShowSlider] = useState(false);
  console.log(showSlider);
  return (
    <div
      className="relative min-h-[350px] h-fit max-w-[600px] rounded-[35px]"
      onMouseOver={() => {
        setShowSlider(true);
      }}
      onMouseLeave={() => setShowSlider(false)}
    >
      <motion.div
        className={`absolute transition-all duration-2000 ease-linear inset-0 p-2 bg-red-400 rounded-[35px] z-30 ${
          showSlider
            ? "-translate-x-[1600px] opacity-90"
            : "translate-x-0 opacity-100"
        } `}
      >
        <section className={`w-full flex gap-10 items-start py-10 `}>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" absolute top-5 left-[-80px] z-20"
          >
            <Image
              src="/task2/task_2_image1.png"
              width={500}
              height={500}
              alt="first image"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <section className="ml-45 flex gap-2 md:gap-4 flex-col px-6">
            <h1 className="text-end text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              Start With Clarity
            </h1>
            <h2 className="text-end text-white font-semibold text-base sm:text-xl lg:text-2xl leading-7">
              Step Into a better learning path
            </h2>
            <p className="text-end text-white  text-sm lg:text-base leading-[18px] md:leading-[26px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis neque obcaecati, ex natus deserunt et ullam, in totam
              autem tenetur veniam harum animi, dolor suscipit fugit asperiores
              perferendis impedit dolorum.
            </p>
          </section>
        </section>
      </motion.div>

      <main>
        {showSlider && (
          <div
            className={`absolute bg-red-400 rounded-[35px] inset-0 w-full h-full`}
          >
            <div className="absolute left-0 top-[40%] flex justify-start pl-8 items-center -translate-x-1/2 w-[120px] h-[120px] bg-white rounded-full z-30">
              <button className="bg-white p-5 rounded-full shadow-md cursor-pointer shadow-gray-400 flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 8l-4 4l4 4m-4-4h20"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute right-0 top-[40%] flex justify-start pl-4 items-center translate-x-[55%] w-[120px] h-[120px] bg-white rounded-full z-30">
              <button className="bg-white p-5 cursor-pointer rounded-full shadow-md shadow-gray-400 flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="m15.038 6.343l-1.411 1.418l3.27 3.255l-13.605.013l.002 2l13.568-.013l-3.215 3.23l1.417 1.41l5.644-5.67z"
                  />
                </svg>
              </button>
            </div>
            {/* slider section */}
            <div className="relative h-full w-full flex justify-between px-5 z-20">
              <section className="h-full w-full flex items-end">
                <Image
                  src="/task2/single_image.png"
                  width={1000}
                  height={1000}
                  alt="single image"
                  className="h-full w-full object-cover"
                />
              </section>

              <section className=" w-[50%] py-10">
                <h1 className="font-bold text-white text-base lg:text-xl font-outfit ">
                  Clarity unlocked—
                </h1>
                <h2 className="font-bold text-white text-base lg:text-lg font-outfit ">
                  stickers, sips, and skills all in one go!
                </h2>
              </section>
              <section className="absolute left-5 top-5">
                <Image
                  src="/task2/wow_2.png"
                  width={1000}
                  height={1000}
                  alt="single image"
                  className="h-full w-full object-contain"
                />
              </section>
              <section className="absolute right-18 bottom-8">
                <Image
                  src="/task2/wow_image.png"
                  width={1000}
                  height={1000}
                  alt="single image"
                  className="h-full w-full object-contain"
                />
              </section>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FirstComponent;
