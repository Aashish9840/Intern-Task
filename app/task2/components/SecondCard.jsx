"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondCard = () => {
  const [showSlider, setShowSlider] = useState(false);
  const sliderList = [
    {
      description: "Focused faces—learning mode: ON!",
      image: "/task2/double_person.png",
    },
    {
      description: "Laptops, lessons, and a whole lot of growth!",
      image: "/task2/group_image.png",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div
      className="relative min-h-[350px] h-fit max-w-[600px]  rounded-[35px]"
      onMouseOver={() => {
        setShowSlider(true);
      }}
      onMouseLeave={() => setShowSlider(false)}
    >
      <div
        className={`absolute inset-0 transition-all duration-2000 ease-linear p-2 bg-[#5492A0] rounded-[35px] z-30 
        ${
          showSlider
            ? "-translate-x-[1600px] opacity-90"
            : "translate-x-0 opacity-100"
        }`}
      >
        <section className={`w-full py-10 `}>
          <section className=" w-[75%] flex gap-2 lg:gap-4 flex-col px-4">
            <h1 className=" text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              Learn By Doing
            </h1>
            <h2 className=" text-white font-semibold text-base sm:text-xl lg:text-2xl leading-7">
              Practical skills, real projects.
            </h2>
            <p className=" text-white text-sm lg:text-base leading-[18px] lg:leading-[26px] mt-4">
              Theory is great, but action is better. At SkillShikshya, you learn
              by doing. Hands-on projects and real-world scenarios help you
              build, break, and create—leading to true mastery.
            </p>
          </section>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" absolute top-5 right-[0px] z-20"
          >
            <Image
              src="/task2/task_2_image2.png"
              width={500}
              height={500}
              alt="first image"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </section>
      </div>

      <main>
        {showSlider && (
          <div className="absolute inset-0 bg-[#5492A0]  rounded-[35px] w-full h-full">
            <div
              onClick={() => previous()}
              className="absolute cursor-pointer left-0 top-[40%] flex justify-start pl-8 items-center -translate-x-1/2 w-[120px] h-[120px] bg-white rounded-full z-30"
            >
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

            <div
              onClick={() => next()}
              className="absolute cursor-pointer right-0 top-[40%] flex justify-start pl-4 items-center translate-x-[55%] w-[120px] h-[120px] bg-white rounded-full z-30"
            >
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
            {/* slider content */}
            <div className="h-full w-full relative z-10">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                {sliderList.map((slider, index) => (
                  <div key={index} className="p-10 flex flex-col">
                    <h1
                      className={`font-bold font-outfit text-xl text-white ${
                        index % 2 === 0 ? "text-start w-[50%]" : "text-center"
                      }`}
                    >
                      {slider.description}
                    </h1>

                    <div className="flex items-end justify-center relative h-[250px] w-full">
                      <div className="h-full w-full">
                        <Image
                          src={slider?.image}
                          alt="slider image"
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </main>

      <style>
        {`
        .slick-prev{
        display:none !important
        }

         .slick-next{
        display:none !important
        }
        `}
      </style>
    </div>
  );
};

export default SecondCard;
