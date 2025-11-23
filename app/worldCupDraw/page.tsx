"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveLeft } from "lucide-react";

function drawGenerator(pot1, pot2, pot3, pot4) {
  //array of arrays?
  //first team in each pot goes to group A
  //all teams that wen to group A should be unavailable to pick for next groups
  //Do this until there are no teams left/pot 1 is empty
  //Version 1 ---> on click of the Draw button, all groups are filled with teams right away
  //Version 2 ---> user sees teams filling the groups one by one in the order of pots (all teams from pot 1 first)
  //Version 3 ---> user sees team filling the groups one by one in the order of groups (all teams in group A first)

  //get a random team from pot1
  let handOfMaterazzi = Math.floor(Math.random() * 8); //random grab // needs to be called on EVERY team
  let teamOne = pot1[handOfMaterazzi];
  let teamTwo = pot2[handOfMaterazzi];
  let teamThree = pot3[handOfMaterazzi];
  let teamFour = pot4[handOfMaterazzi];

  let group = [teamOne, teamTwo, teamThree, teamFour];
  return group;
}

const Groups = (props) => {
  return (
    <div className="flex m-5">
      <div className="bg-green-600 p-3">
        <p className="bg-pink-600 text-2xl">Group A</p>
        {props.teams.map((team: string) => {
          return <p className="text-xl">{team}</p>;
        })}
      </div>
      {/* map the amount of groups based on the amount of teams in the draw */}
      <div className="m-2 bg-green-600">Group B</div>
      <div className="m-2 bg-green-600">Group C</div>
      <div className="m-2 bg-green-600">Group D</div>
      <div className="m-2 bg-green-600">Group E</div>
      <div className="m-2 bg-green-600">Group F</div>
      <div className="m-2 bg-green-600">Group G</div>
      <div className="m-2 bg-green-600">Group H</div>
      <div className="m-2 bg-green-600">Group I</div>
      <div className="m-2 bg-green-600">Group J</div>
      <div className="m-2 bg-green-600">Group K</div>
      <div className="m-2 bg-green-600">Group L</div>
    </div>
  );
};

export default function NextComponent() {
  // itd be cool to grab the teams from fifa website instead of hard coding
  const potOne = [
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
  ];
  const potTwo = [
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
  ];
  const potThree = [
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
  ];
  const potFour = [
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
  ];

  //const result = ["Norway", "Panama", "Egypt", "Algeria"];
  const result = drawGenerator(potOne, potTwo, potThree, potFour);
  //call the draw generator
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-cyan-300 mt-5">World Cup Draw UI</header>
      <button className="bg-blue-500 p-3 m-5 hover:bg-blue-400">
        Hand of Materazzi
      </button>
      <Groups teams={result} />
    </div>
  );
}
