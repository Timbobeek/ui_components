"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { teams } from "./teams";

export default function NextComponent() {
  const [contenders, setContenders] = useState(teams);

  const handleClick1 = () => {
    if (contenders[0][1].selected === true) {
      setContenders((prev) => {
        const copy = prev.map((group) => [...group]); // shallow clone each group
        copy[0][1] = { ...copy[0][1], selected: false };
        return copy;
      });
    }
    setContenders((prev) => {
      const copy = prev.map((group) => [...group]);
      copy[0][0] = { ...copy[0][0], selected: true };
      return copy;
    });
  };

  const handleClick2 = () => {
    if (contenders[0][0].selected === true) {
      setContenders((prev) => {
        const copy = prev.map((group) => [...group]);
        copy[0][0] = { ...copy[0][0], selected: false };
        return copy;
      });
    }
    setContenders((prev) => {
      const copy = prev.map((group) => [...group]);
      copy[0][1] = { ...copy[0][1], selected: true };
      return copy;
    });
  };

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
              onClick={handleClick1}
            >
              Brazil
            </button>
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                contenders[0][1].selected ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick2}
            >
              Argentina
            </button>
          </div>
          {/* <div className="flex flex-col">
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                selected3 ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick}
            >
              Spain
            </button>
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                selected4 ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick}
            >
              Germany
            </button>
          </div> */}
        </div>
        {/* -----------------------next stage-------------------------- */}
        {/* <div className="flex flex-col w-1/4 justify-center">
          <button
            className={` text-black p-5 m-3 hover:bg-yellow-300 ${
              selected5 ? "bg-yellow-300" : "bg-green-500"
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
    </div>
  );
}
