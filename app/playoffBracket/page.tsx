"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { teams } from "./teams";

export default function NextComponent() {
  const [contenders, setContenders] = useState(teams);

  const handleClick = ({
    matchID,
    teamID,
  }: {
    matchID: number;
    teamID: number;
  }) => {
    // if there is more than one team that has selected = true
    if (contenders[matchID].find((team) => team.selected)) {
      const otherTeamID = contenders[matchID].findIndex(
        (team) => team.selected
      );
      setContenders((prev) => {
        //unselect that other team
        const copy = prev.map((group) => [...group]);
        copy[matchID][otherTeamID] = {
          ...copy[matchID][otherTeamID],
          selected: false,
        };
        return copy;
      });
    }
    setContenders((prev) => {
      //select current team
      const copy = prev.map((group) => [...group]);
      copy[matchID][teamID] = { ...copy[matchID][teamID], selected: true };
      return copy;
    });
  };

  console.log(contenders);

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-yellow-300 mt-5">Playoff Bracket</header>
      <div className=" w-1/2 flex">
        <div className="flex flex-col w-1/4">
          <div className="flex flex-col">
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                contenders[0][0].selected ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={() => handleClick({ matchID: 0, teamID: 0 })} // pass matchID and teamID
            >
              {contenders[0][0].label}
            </button>
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                contenders[0][1].selected ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={() => handleClick({ matchID: 0, teamID: 1 })}
            >
              {contenders[0][1].label}
            </button>
          </div>
          <div className="flex flex-col">
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                contenders[1][0].selected ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={() => handleClick({ matchID: 1, teamID: 0 })} // pass matchID and teamID
            >
              {contenders[1][0].label}
            </button>
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                contenders[1][1].selected ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={() => handleClick({ matchID: 1, teamID: 1 })}
            >
              {contenders[1][1].label}
            </button>
          </div>
        </div>
        {/* -----------------------next stage-------------------------- */}
        {/* <div className="flex flex-col w-1/4 justify-center">
          <button
            className={` text-black p-5 m-3 hover:bg-yellow-300 ${
              contenders[0] ? "bg-yellow-300" : "bg-green-500"
            }`}
            onClick={handleClick}
          >
            Brazil
          </button>
          <button
            className={` text-black p-5 m-3 hover:bg-yellow-300 ${
              selected6 ? "bg-yellow-300" : "bg-green-500"
            }`}
            onClick={handleClick}
          >
            Argentina
          </button>
        </div> */}
        {/* -----------------------champion-------------------------- */}
        {/* <div className="flex flex-col items-center justify-center">
          <div className="text-black font-bold bg-red-400 h-1/4 flex flex-col items-center">
            2026 FIFA World Cup Winners
            <p className="text-3xl">Brazil</p>
          </div>
        </div> */}
      </div>
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            A lot of states. I have an overall state of all teams present at the
            beginning fo the tournament. Then the user has to choose one of the
            two teams in each match-up. The chosen teams state transfers to the
            next stage of the bracket. Finding the ideal type to keep the teams
            in for all of the future manipulations is important. I want to avoid
            having 60 handleClick functions.<br></br> Challenge 1: Question: I
            am considering the logic for next phase of the bracket. Lets say I
            selected a team in each pair. Then, all these selected teams move
            onto the next stage. And so on until the final where last two teams
            meet. These are options I came up with: 1. Add selected2,selected3
            and so on to each team object in teams and switch those around.
            Problem with it is that handleClick will become huge with all the
            state changes of different selected. 2. Keep the handleClick the
            same, but make a dynamic const teams. For example, if Brazil and
            Iceland are selected, we generate a new array with two objects that
            are copies of Brazil and Iceland objects. This new array will have
            selected at false again. Issues here: once i select a team to go to
            the next phase, i add that team to the new array. What if i ended up
            changing that team, that means the object in the new array needs to
            be adjusted/rewritten?
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p>
            One must pass the function to be executed later into onClick, not
            call the function immediately.
            {/* Correct is onClick={() => handleClick(stuff)} , incorrect is onClick={handleClick} */}
          </p>
        </div>
      </div>
    </div>
  );
}
