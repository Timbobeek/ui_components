"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

type attributeName = "strength" | "speed";

export default function CharacterStats() {
  const totalPoints = 15;

  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleAttributeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    attributeName: attributeName
  ) => {
    const newValue = Number(event.target.value); // value received from onChange of any of the two sliders

    if (attributeName === "strength") {
      const newStrength = newValue;
      const newSpeed = speed;

      const sum = newStrength + newSpeed;

      if (sum > totalPoints) {
        // if current strength + current speed > 15
        // reduce the other slider so total stays 15
        setSpeed(totalPoints - newStrength);
      }

      setStrength(newStrength);
    }

    if (attributeName === "speed") {
      const newSpeed = newValue;
      const newStrength = strength;

      const sum = newSpeed + newStrength;

      if (sum > totalPoints) {
        setStrength(totalPoints - newSpeed);
      }

      setSpeed(newSpeed);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-stone-200 mt-5">
        Character Stats Sliders UI
      </header>
      <div className="m-10">
        Points left:{" "}
        <span className="text-green-500 text-xl">
          {totalPoints - speed - strength}
        </span>{" "}
        points
        <div className="m-2 text-red-500">
          <input
            type="range"
            id="strength"
            className="accent-red-500" //handle color affects the track color. but track color is chosen by browser/os automatically
            min="0"
            max={totalPoints}
            value={strength}
            step="1"
            onChange={(event) => handleAttributeChange(event, "strength")}
          />
          Strength: <strong>{strength}</strong>
        </div>
        <div className="m-2 text-blue-500">
          <input
            type="range"
            id="speed"
            className="accent-blue-500"
            min="0"
            max={totalPoints}
            value={speed}
            step="1"
            onChange={(event) => handleAttributeChange(event, "speed")}
          />
          Speed: <strong>{speed}</strong>
        </div>
      </div>
      <div className="flex items-center w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white">
          <p className="text-2xl m-5">Challening parts: </p>
          <p>
            The algorithm to write this slider system was the boggest challenge.
            Making sure the two slider values, total points value and points
            left value are all in sync. Initially, my points left value and sum
            of the slider values were async by 1, because of how I was changing
            the state. The state was lagging behind.
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white">
          <p className="text-2xl m-5">Things I learned here: </p>
          <p>
            I wanted to change the color of the sliders. I found that property
            'accent' is responsible for changing the color of the handle, the
            thing we drag/slide. I set the handle color to{" "}
            <strong className="text-red-500">red</strong> and{" "}
            <strong className="text-blue-500">blue</strong>, respectively. Then
            I noticed that now my two sliders have a different track color, the
            thing we slide the handle through. Turns out, the OS/Browser
            automatically choose the track color based on the color of the
            handle. So, the red slider here has a white, light tracker because
            the os/browser considers my red handle dark, so the track must be
            the opposite. Blue is considered light, so the track is dark gray.
          </p>
        </div>
      </div>
    </div>
  );
}
