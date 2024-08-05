"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import React from "react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3b82f6", // Tailwind's blue-500 color
        gap: "2rem" // Tailwind's gap-8
      }}
    >
      <button
        style={{
          backgroundColor: "#3b82f6", // Tailwind's blue-500 color
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem", // Tailwind's rounded-md
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease"
        }}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold style={{ fontSize: "1.5rem", color: "white" }} />
      </button>
      <button
        style={{
          backgroundColor: "#3b82f6", // Tailwind's blue-500 color
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem", // Tailwind's rounded-md
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease"
        }}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold style={{ fontSize: "1.5rem", color: "white" }} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
