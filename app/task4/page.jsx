"use client";
import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const page = () => {
  const cards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />];
  const [cardIndex, setCardIndex] = useState(3);
  useEffect(() => {
    const time = setTimeout(() => {
      setCardIndex((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          return (prev = 0);
        }
      });
    }, 2000);
    return () => clearTimeout(time);
  }, [cardIndex]);
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>{cardIndex === index && <div>{card}</div>}</div>
      ))}
    </div>
  );
};

export default page;
