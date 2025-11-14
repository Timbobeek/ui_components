"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveLeft } from "lucide-react";

export default function NextComponent() {
  const [ count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  },[])

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-stone-200 mt-5">TBD learning useEffect?</header>
      <p className="text-yellow-300 m-3">you clicked the green button below <strong className="text-xl">{count}</strong>  times</p>
      <button className="bg-green-500 p-5" onClick={()=> setCount(count+1)}>
        Click me
      </button>
    </div>
  );
}
