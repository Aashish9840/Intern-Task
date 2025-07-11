import React from "react";
import FirstComponent from "./components/FirstComponent";
import ThirdCard from "./components/ThirdCard";
import FourthCard from "./components/FourthCard";
import SecondCard from "./components/SecondCard";

const page = () => {
  return (
    <section className="px-5 lg:px-20 py-40">
      <div className=" flex flex-col gap-4 mb-14">
        <h1 className="text-base sm:text-2xl font-gray-700 font-medium font-outfit">
          Your SkillsShikshya Journey
        </h1>
        <h1 className="text-xl sm:text-4xl text-black font-extrabold font-outfit">
          <span className="text-green-600">Step</span> In.{" "}
          <span className="text-green-600">Still</span> Up{" "}
          <span className="text-green-600">Stand</span> Out
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-2">
        <FirstComponent />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </div>
    </section>
  );
};

export default page;
