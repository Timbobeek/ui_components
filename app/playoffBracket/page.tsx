"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveLeft } from "lucide-react";
import { teams } from "./teams";

export default function NextComponent() {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-yellow-300 mt-5">Playoff Bracket</header>
      <div className="w-1/5">
        <div className="flex flex-col">
          <button
            className={` text-black p-5 m-3 hover:bg-yellow-300 ${
              selected ? "bg-yellow-300" : "bg-green-500"
            }`}
            onClick={handleClick}
          >
            Brazil
          </button>
          <button className="bg-green-500 text-black p-5 m-3 hover:bg-yellow-300">
            Argentina
          </button>
          <button className="bg-green-500 text-black p-5 m-3 hover:bg-yellow-300">
            Spain
          </button>
          <button className="bg-green-500 text-black p-5 m-3 hover:bg-yellow-300">
            Germany
          </button>
        </div>
      </div>
    </div>
  );
}
