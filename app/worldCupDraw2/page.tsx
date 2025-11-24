"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useState } from "react";

export function drawOneTeam(
  potsState: string[][],
  setPotsState: React.Dispatch<React.SetStateAction<string[][]>>,
  groups: string[][],
  setGroups: React.Dispatch<React.SetStateAction<string[][]>>,
  groupIndex: number,
  setGroupIndex: React.Dispatch<React.SetStateAction<number>>,
  potIndex: number,
  setPotIndex: React.Dispatch<React.SetStateAction<number>>
) {
  if (groupIndex >= 12) return;

  setPotsState((prev) => {
    const newPots = prev.map((p) => [...p]);
    const pot = newPots[potIndex];

    const hand = Math.floor(Math.random() * pot.length);
    const team = pot[hand];

    pot.splice(hand, 1);

    setGroups((prevGroups) => {
      const updated = prevGroups.map((g) => [...g]);
      updated[groupIndex].push(team);
      return updated;
    });

    if (potIndex < 3) {
      setPotIndex(potIndex + 1);
    } else {
      setPotIndex(0);
      setGroupIndex(groupIndex + 1);
    }

    return newPots;
  });
}

type Props = {
  teams: string[][];
};

const Groups = (props: Props) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="flex m-5">
      {props.teams.map((group: string[], index: number) => (
        <div key={index} className="m-3">
          <p className="text-xl bg-pink-600 p-3">Group {alphabet[index]} </p>
          {group.map((team, i) => (
            <p key={i} className="bg-green-700 p-2">
              {team}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function NextComponent() {
  const pots = [
    [
      "USA",
      "Mexico",
      "Canada",
      "Spain",
      "Argentina",
      "France",
      "England",
      "Brazil",
      "Portugal",
      "Netherlands",
      "Belgium",
      "Germany",
    ],
    [
      "Croatia",
      "Morocco",
      "Colombia",
      "Uruguay",
      "Switzerland",
      "Japan",
      "Senegal",
      "Iran",
      "South Korea",
      "Ecuador",
      "Austria",
      "Australia",
    ],
    [
      "Norway",
      "Panama",
      "Egypt",
      "Algeria",
      "Scotland",
      "Paraguay",
      "Tunisia",
      "Ivory Coast",
      "Uzbekistan",
      "Qatar",
      "Saudi Arabia",
      "South Africa",
    ],
    [
      "Jordan",
      "Cape-Verde",
      "Ghana",
      "Curacao",
      "Haiti",
      "New Zealand",
      "UEFA A",
      "UEFA B",
      "UEFA C",
      "UEFA D",
      "INTER-CON A",
      "INTER-CON B",
    ],
  ];

  const [potsState, setPotsState] = useState<string[][]>(pots); // live mutable pots
  const [groups, setGroups] = useState<string[][]>(
    Array.from({ length: 12 }, () => [])
  );
  const [groupIndex, setGroupIndex] = useState(0); // 0 → 11
  const [potIndex, setPotIndex] = useState(0); // 0 -> 3

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-fuchsia-800 mt-5">
        World Cup Draw UI (Gradual)
      </header>
      <button
        onClick={() =>
          drawOneTeam(
            potsState,
            setPotsState,
            groups,
            setGroups,
            groupIndex,
            setGroupIndex,
            potIndex,
            setPotIndex
          )
        }
        className="bg-blue-500 p-3 m-5 hover:bg-blue-400"
      >
        Hand of Materazzi
      </button>
      <Groups teams={groups} />
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
          <p></p>
        </div>
      </div>
    </div>
  );
}
