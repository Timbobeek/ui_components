"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useState } from "react";

type Pots = string[][];

function drawGenerator(pots: Pots) {
  const potsCopy = pots.map((pot) => [...pot]); // made a copy, so we dont mutate the original pots

  const groups: string[][] = Array.from({ length: 12 }, () => []);

  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < potsCopy.length; j++) {
      const hand = Math.floor(Math.random() * potsCopy[j].length);
      groups[i].push(potsCopy[j][hand]);
      potsCopy[j].splice(hand, 1);
    }
  }
  return groups;
}

type Props = {
  teams: string[][];
};

const Groups = (props: Props) => {
  return (
    <div className="flex m-5">
      {props.teams.map((group: string[], index: number) => (
        <div key={index} className="m-3">
          <p className="text-xl bg-pink-600 p-3">Group {index + 1} </p>
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

  const [result, setResult] = useState<string[][]>([]);

  const drawGroups = () => {
    setResult(drawGenerator(pots));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-cyan-300 mt-5">World Cup Draw UI</header>
      <button
        onClick={drawGroups}
        className="bg-blue-500 p-3 m-5 hover:bg-blue-400"
      >
        Hand of Materazzi
      </button>
      <Groups teams={result} />
    </div>
  );
}
