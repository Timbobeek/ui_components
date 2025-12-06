"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import React, { useState } from "react";

type Item = { id: string; text: string };

export default function DraggableList(): JSX.Element {
  const [items, setItems] = useState<Item[]>([
    { id: "a", text: "Item A" },
    { id: "b", text: "Item B" },
    { id: "c", text: "Item C" },
    { id: "d", text: "Item D" },
  ]);

  const onDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", String(index));
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const srcIndex = Number(e.dataTransfer.getData("text/plain"));
    if (srcIndex === dropIndex) return;

    setItems((prev) => {
      const next = [...prev];
      const [moved] = next.splice(srcIndex, 1);
      next.splice(dropIndex, 0, moved);
      return next;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-teal-500 mt-5">Draggable List</header>
      <div className="p-4 w-1/4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={item.id}
              draggable // makes the element draggable
              onDragStart={(e) => onDragStart(e, index)}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, index)}
              className="p-3 bg-green-500 font-bold rounded cursor-move hover:bg-yellow-200 hover:text-green-500"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center m-10">
        <header className="text-2xl text-orange-400">
          draggable attribute demo
        </header>
        <p draggable className="mt-5 bg-purple-700">
          draggable text (normal select cursor on text)
        </p>
        <p className="mt-5 bg-purple-700">
          non-draggable text (text select cursor on text)
        </p>
      </div>
    </div>
  );
}
