"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const FourthCard = () => {
  return (
    <section
      className={` relative bg-[#A88964] min-h-[350px] h-fit max-w-[600px] rounded-[35px] flex justify-start items-start py-10`}
    >
      <section className="flex gap-2 lg:gap-4 flex-col p-6 w-[75%]">
        <h1 className="text-start text-white font-bold text-xl sm:text-2xl lg:text-3xl">
          Acheive & Showcase
        </h1>
        <h2 className="text-start text-white font-semibold text-base sm:text-xl lg:text-2xl leading-7">
          Build Your Portfoliio, get job-ready.
        </h2>
        <p className="text-start text-white leading-[18px] text-sm lg:text-base lg:leading-[26px] mt-4">
          Your journey ends with achievement. Each completed project builds a
          portfolio showcasing your skills and job readiness, bringing you
          closer to that dream job, promotion, or your own venture.
        </p>
      </section>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className=" absolute top-15 right-[-80px] z-20"
      >
        <Image
          src="/task2/task_2_image4.png"
          width={1000}
          height={1000}
          alt="first image"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default FourthCard;
