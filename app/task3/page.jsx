"use client";
import React, { useState } from "react";
import DetailsCard from "./DetailsCard";
import { motion } from "framer-motion"; // Use correct import

const Page = () => {
  const [showDetails, setShowDetails] = useState(0);

  const coursesList = [
    {
      title: "All Courses",
      description: "Courses you are powering through right now",
      Total: "23",
    },
    {
      title: "Upcoming Courses",
      description: "Exciting new courses waiting to boost your skills",
      Total: "05",
    },
    {
      title: "Ongoing Courses",
      description: "Currently happening—don't miss out on the action!",
      Total: "10",
    },
  ];

  return (
    <div className="p-6 lg:px-10 lg:py-20">
      <section className="flex flex-col gap-4 pb-5">
        <h1 className="text-2xl font-medium font-outfit text-gray-600">
          Explore our classes and master trending skills
        </h1>
        <h2 className="text-black font-bold text-3xl lg:text-4xl font-outfit ">
          Dive Into{" "}
          <span className="text-green-700">What's Hot Right Now!</span>
        </h2>
      </section>

      <section className="flex flex-wrap gap-5">
        {coursesList.map((course, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => setShowDetails(index)}
            transition={{ layout: { duration: 2, type: "spring" } }}
            className={`cursor-pointer rounded-[30px] overflow-hidden p-5 ${
              showDetails === index ? "text-white" : " text-[#C33241]"
            }`}
            style={{
              flex: "1 1 300px",
              minWidth: "300px",
              maxWidth: showDetails === index ? "100%" : "300px",
              backgroundColor: showDetails === index ? "#C33241" : "#F9EBEC",
            }}
          >
            {showDetails === index ? (
              <motion.div key="expanded">
                <DetailsCard course={course} />
              </motion.div>
            ) : (
              <motion.div key="collapsed" className="flex flex-col gap-8">
                <motion.section
                  initial={{ rotate: 10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 10, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="relative w-full h-[300px]"
                >
                  <div className="absolute left-[40%] h-full w-full transform -rotate-90">
                    <h1 className="font-extrabold text-[#C33241] text-2xl lg:text-3xl font-outfit">
                      {course.title}
                    </h1>
                    <h2 className="mt-4 font-medium text-[#C33241] text-base lg:text-lg font-outfit">
                      {course.description}
                    </h2>
                  </div>
                </motion.section>

                <section className="relative flex items-center justify-center">
                  <h1 className="font-extrabold text-[#C33241] text-4xl lg:text-[140px] font-outfit">
                    {course.Total}
                  </h1>
                  <p className="absolute top-[-5px] right-[-10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#C33241"
                        d="M15.5 6H10V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
                      />
                    </svg>
                  </p>
                </section>
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Page;
