"use client";

import Link from "next/link";
import { MoveLeft, InfoIcon } from "lucide-react";

export default function NextComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-lime-200 mt-5">Tooltip UI</header>
      <div className=" mt-5 flex">
        <p>hover on the icon on the right</p>

        <div className="relative group inline-block">
          <span className=" cursor-pointer">
            <InfoIcon className="w-4" />
          </span>

          <div
            className="
         absolute left-1/2 -translate-x-1/2 top-6
         opacity-0 group-hover:opacity-100
         pointer-events-none
         transition-opacity duration-150
         bg-pink-900 text-white border border-gray-400
         text-xs px-2 py-1 rounded-sm whitespace-nowrap
         shadow-md
      "
          >
            Tooltip with any text you want
          </div>
        </div>
      </div>
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            The structure and styling to create a tooltip. Styling-wise, the
            element that holds tooltip content has to be invisible until hovered
            on, which is controlled by opacity.
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p>
            {" "}
            I wanted to make a text with an info icon by it. If you hover
            SPECIFICALLY on the info icon, the tooltip pops up with a message.
            The div with the tooltip element has to be in a separate div from
            the text.
          </p>
        </div>
      </div>
    </div>
  );
}
