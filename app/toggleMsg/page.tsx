"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";
import React from "react";

export default function MsgToggle() {
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-blue-600 mt-5">Toggle Message UI</header>
      <div className="m-5 text-2xl">
        <React.Fragment>
          <a href="#" onClick={handleClick} className="text-orange-300">
            Click this text to see the hidden message below!
          </a>
          {showNumber && (
            <p className="bg-white text-black text-center">
              This is the hidden message
            </p>
          )}
        </React.Fragment>
      </div>
    </div>
  );
}
