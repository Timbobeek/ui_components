"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function DragList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-teal-500 mt-5">Draggable List</header>
    </div>
  );
}
