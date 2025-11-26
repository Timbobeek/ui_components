"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { pots } from "./pots";
import { drawOneTeam } from "./drawOneTeam";
import { Groups } from "./groups";

export default function PotsBasedDrawFinal() {
  const [potsState, setPotsState] = useState<string[][]>(
    pots.map((p) => [...p]) // avoid putting pots into state, as we might mutate it later and we dont want to mutate the oiginal data
  );
  const [groups, setGroups] = useState<string[][]>(
    Array.from({ length: 12 }, () => [])
  );
  const [groupIndex, setGroupIndex] = useState(0); // 0 → 11
  const [potIndex, setPotIndex] = useState(0); // 0 -> 3

  const isFinished = potIndex > pots.length - 1;

  const handleNextTeam = () => {
    drawOneTeam(
      potsState,
      setPotsState,
      groups,
      setGroups,
      groupIndex,
      setGroupIndex,
      potIndex,
      setPotIndex
    );
  };

  const handleReset = () => {
    setPotsState(pots.map((p) => [...p]));
    setGroups(Array.from({ length: 12 }, () => []));
    setGroupIndex(0);
    setPotIndex(0);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-orange-500 mt-5 text-center">
        <p>World Cup Draw UI</p>
        <p>(Gradual Pots First)</p>
      </header>
      <div>
        <button
          onClick={handleNextTeam}
          className="bg-blue-500 p-3 m-5 hover:bg-blue-400 disabled:hover:bg-blue-500 disabled:opacity-35"
          disabled={isFinished}
        >
          Hand of Materazzi
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 p-3 m-5 hover:bg-red-400"
        >
          Reset
        </button>
      </div>

      <p>each click adds a new team in a group, pot by pot</p>
      <Groups teams={groups} />
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            Rewriting group based draw into pots based draw is a brain exercise.{" "}
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
