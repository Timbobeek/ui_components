"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

export default function Slideshow() {
  const slidesData = [
    {
      title: "Slide 1",
      text: "When you hit restart, this is where it goes. As of now, restart and prev buttons are disabled. Next button is enabled.",
    },
    {
      title: "Slide 2",
      text: "Slide number two. All buttons should be enabled",
    },
    {
      title: "Slide 3",
      text: "Third slide here. All buttons should be enabled",
    },
    {
      title: "Slide 4",
      text: "Numero cuatro. All buttons should be enabled",
    },
    {
      title: "Last slide",
      text: "This is the final slide. Next button should be disabled. Restart and Prev enabled.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slidesData[currentIndex];

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slidesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-yellow-200 mt-5">Slideshow UI</header>

      <div className="flex flex-col items-center justify-center mt-20">
        <div id="navigation" className="text-center">
          <button
            className="p-3 bg-green-500 m-3 w-20 hover:text-black disabled:bg-red-400 disabled:hover:text-white"
            onClick={handleRestart}
            disabled={currentIndex === 0}
          >
            Restart
          </button>
          <button
            className="p-3 bg-green-500 m-3 w-20 hover:text-black disabled:bg-red-400 disabled:hover:text-white"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Prev
          </button>
          <button
            className="p-3 bg-green-500 m-3 w-20 hover:text-black disabled:bg-red-400 disabled:hover:text-white"
            onClick={handleNext}
            disabled={currentIndex === slidesData.length - 1}
          >
            Next
          </button>
        </div>

        <div className="text-center bg-green-300 text-black m-3 p-3">
          <h1 className="text-xl m-3 text-purple-700">{currentSlide.title}</h1>
          <p>{currentSlide.text}</p>
        </div>
      </div>
    </div>
  );
}
