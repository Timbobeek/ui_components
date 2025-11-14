"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

function ListManager() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-blue-200 mt-5">Item List Manager</header>

      <div className="flex flex-col items-center justify-center mt-20">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button
          className="p-3 bg-green-500 m-3 w-20 hover:text-black disabled:hover:text-white disabled:bg-green-700"
          onClick={handleAddItem}
          disabled={input === ""}
        >
          Add Item
        </button>
        <p className="text-xl text-yellow-400">Item List Below</p>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} className="">
              ---{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListManager;
