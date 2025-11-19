"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

export default function CharacterStats() {
  const totalPoints = 15;
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleAttributeChange = (event, attributeName) => {
    if (attributeName === "strength") {
      setStrength(event.target.value);
      if (speed + strength > totalPoints) {
        setSpeed(totalPoints - strength);
      }
    } else if (attributeName === "speed") {
      setSpeed(event.target.value);
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
        Character stats:{" "}
        <span className="text-green-500 text-xl">{totalPoints}</span> points
        <div className="m-2 text-red-500">
          <input
            type="range"
            id="strength"
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
            min="0"
            max={totalPoints}
            value={speed}
            step="1"
            onChange={(event) => handleAttributeChange(event, "speed")}
          />
          Speed: <strong>{speed}</strong>
        </div>
      </div>
    </div>
  );
}
