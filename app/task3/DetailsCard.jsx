"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const DetailsCard = ({ course }) => {
  const iconsimages = [
    "/task3/react.png",
    "/task3/reaction.png",
    "/task3/Vuejs.png",
    "/task3/group.png",
  ];
  return (
    <div className="flex flex-col gap-14 py-12 px-16 min-w-[600px]">
      <section className=" cursor-pointer flex justify-end items-center gap-3">
        <h1 className="text-lg font-bold text-white font-outfit">
          View All the Courses
        </h1>
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#fcf5f5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 12l-6-6m6 6l-6 6m6-6H5"
            />
          </svg>
        </motion.div>
      </section>

      <motion.section
        animate={{ x: [0, -50, 50, 0] }}
        transition={{ duration: 1 }}
        className="flex items-center gap-5"
      >
        {iconsimages.map((icons, index) => (
          <div className="w-full h-full" key={index}>
            <Image
              src={icons}
              height={600}
              width={600}
              alt="icon images"
              className="w-full h-full"
            />
          </div>
        ))}
      </motion.section>
      <section className=" flex items-start justify-center gap-10">
        <motion.div
          key="collapsed"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <h1 className="text-white font-extrabold text-4xl lg:text-[140px] font-outfit">
            {course.Total}
          </h1>
          <p className="absolute top-[-10px] right-[-30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 16 16"
            >
              <path
                fill="#FFFF"
                d="M15.5 6H10V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
              />
            </svg>
          </p>
        </motion.div>

        <motion.div
          key="content"
          initial={{ rotate: 10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 10, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col gap-1 mt-3"
        >
          <h1 className="font-bold text-[22px] md:text-[32px] font-outfit text-white">
            {course.title}
          </h1>
          <h2 className="text-white font-outfit text-lg md:text-xl">
            {course.description}
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default DetailsCard;
