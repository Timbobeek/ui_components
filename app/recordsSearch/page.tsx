"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

export default function MedicalRecords() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-lime-500 mt-5">
        Medical Records Search UI
      </header>
    </div>
  );
}
