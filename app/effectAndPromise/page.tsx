"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveLeft } from "lucide-react";

export default function AsyncParagraph() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-yellow-500 mt-5">
        useEffect + Promise 1
      </header>
    </div>
  );
}
