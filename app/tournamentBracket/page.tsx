"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

import SortableList from "./group";

import { Team, teams } from "./teams";

export default function TournamentBracket() {
  const [groups, setGroups] = useState<Team[][]>(teams);

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-white mt-5">Tournament Bracket</header>
      <p className=" text-white ">dnd-kit library</p>

      <header className="text-2xl text-green-500 mt-5">Group Stage</header>
      <div className="w-1/5 m-2">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <p className="text-xl text-center">Group {groupIndex}</p>
            <SortableList
              key={groupIndex}
              items={group}
              setItems={(newGroup) => {
                const newGroups = [...groups];
                newGroups[groupIndex] = newGroup;
                setGroups(newGroups);
              }}
            />
          </div>
        ))}
      </div>

      {/* i need to think of a good way to pick a team in the bracket */}
      <div className=" m-10">
        <header className="text-3xl">1/2</header>
        <div className="bg-yellow-400 m-3">
          <div>{groups[0][0].label}</div>
          <div>{groups[1][1].label}</div>
        </div>
        <div className="bg-green-600 m-3">
          <div>{groups[1][0].label}</div>
          <div>{groups[0][1].label}</div>
        </div>
      </div>

      <div className=" m-10">
        <header className="text-3xl">Final</header>
        <div className="bg-yellow-400 m-3">
          <div>{groups[0][0].label}</div>
          <div>{groups[1][1].label}</div>
        </div>
      </div>

      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className=""></p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p>
            Use the drag and drop mechanism for multiple lists on the same page
          </p>
        </div>
      </div>
    </div>
  );
}
