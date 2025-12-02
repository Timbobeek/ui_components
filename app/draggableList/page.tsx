"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function DragList() {
  const teams = ["Man United", "Real Madrid", "Bayern Munchen", "Inter Milan"];
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-teal-500 mt-5">Draggable List</header>
      <div className="m-10">
        <h2 className="text-2xl">Favorite Teams</h2>
        <ul className="p-3 bg-yellow-300">
          {teams.map((team) => {
            return (
              <li draggable="true" className="bg-green-500 m-2">
                {team}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
