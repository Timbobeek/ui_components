"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveLeft } from "lucide-react";
import { teams } from "./teams";

export default function NextComponent() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);

  const handleClick1 = () => {
    if (selected2 === true) {
      setSelected2(false);
    }
    setSelected1(true);
  };

  const handleClick2 = () => {
    if (selected1 === true) {
      setSelected1(false);
    }
    setSelected2(true);
  };

  const handleClick3 = () => {
    if (selected4 === true) {
      setSelected4(false);
    }
    setSelected3(true);
  };

  const handleClick4 = () => {
    if (selected3 === true) {
      setSelected3(false);
    }
    setSelected4(true);
  };

  const handleClick5 = () => {
    if (selected6 === true) {
      setSelected6(false);
    }
    setSelected5(true);
  };

  const handleClick6 = () => {
    if (selected5 === true) {
      setSelected5(false);
    }
    setSelected6(true);
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
                selected1 ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick1}
            >
              Brazil
            </button>
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                selected2 ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick2}
            >
              Argentina
            </button>
          </div>
          <div className="flex flex-col">
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                selected3 ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick3}
            >
              Spain
            </button>
            <button
              className={` text-black p-5 m-3 hover:bg-yellow-300 ${
                selected4 ? "bg-yellow-300" : "bg-green-500"
              }`}
              onClick={handleClick4}
            >
              Germany
            </button>
          </div>
        </div>
        {/* -----------------------next stage-------------------------- */}
        <div className="flex flex-col w-1/4 justify-center">
          <button
            className={` text-black p-5 m-3 hover:bg-yellow-300 ${
              selected5 ? "bg-yellow-300" : "bg-green-500"
            }`}
            onClick={handleClick5}
          >
            Brazil
          </button>
          <button
            className={` text-black p-5 m-3 hover:bg-yellow-300 ${
              selected6 ? "bg-yellow-300" : "bg-green-500"
            }`}
            onClick={handleClick6}
          >
            Argentina
          </button>
        </div>
        {/* -----------------------champion-------------------------- */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-black font-bold bg-red-400 h-1/4">
            2026 FIFA World Cup Winners
          </p>
        </div>
      </div>
    </div>
  );
}
