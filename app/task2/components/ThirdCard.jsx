"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const ThirdCard = () => {
  return (
    <section
      className={` relative bg-[#6C64A8] min-h-[350px] h-fit max-w-[600px] rounded-[35px] flex justify-end items-start py-10`}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className=" absolute top-25 left-[-80px] z-20"
      >
        <Image
          src="/task2/task_2_image3.png"
          width={1000}
          height={1000}
          alt="first image"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <section className=" w-[90%]  flex gap-2 lg:gap-4 flex-col p-6">
        <h1 className="text-white text-end font-bold text-xl sm:text-2xl lg:text-3xl">
          Get Mentored and Supported
        </h1>
        <h2 className=" text-end text-white font-semibold text-base sm:text-xl lg:text-2xl leading-7">
          You are not learning alone
        </h2>
        <p className="text-end pl-40 text-white text-sm leading-[18px] lg:text-base lg:leading-[26px] mt-4">
          Stuck or need feedback? SkillShikshya’s community of mentors and
          learners has your back with live support, interactive discussions, and
          expert insights. You’re never on your own.
        </p>
      </section>
    </section>
  );
};

export default ThirdCard;
