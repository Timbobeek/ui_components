"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { MoveLeft } from "lucide-react";

export default function NextComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-red-300 mt-5">Input Focus Demo</header>
      <p className="m-5">my UseEffect practice, using useRef </p>
      <p className="m-5 text-green-400">
        the input field below should be <u>focused</u> on render{" "}
      </p>
      <input ref={inputRef} className="p-5"></input>
    </div>
  );
}
