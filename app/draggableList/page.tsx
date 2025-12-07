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
    //when you start dragging
    e.dataTransfer.setData("text/plain", String(index)); //stores the index of the dragged item.
  };

  const onDragOver = (e: React.DragEvent) => {
    //is triggered continuously whenever a draggable element is dragged
    e.preventDefault(); //Browsers block dropping by default, so this line is required to allow a drop on the list items
  };

  const onDrop = (e: React.DragEvent, dropIndex: number) => {
    //when you drop the element
    e.preventDefault();
    const srcIndex = Number(e.dataTransfer.getData("text/plain")); //the index of the item being dragged
    if (srcIndex === dropIndex) return; //If the dragged item is dropped on itself, we do nothing

    setItems((prev) => {
      // sets new order
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
      <p className="text-teal-500">(no animation on drag)</p>
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
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            I did not write the mechanism for this, this was all new knowledge.
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p>
            Basics of drag and drop code. How html draggable attribute works.
          </p>
        </div>
      </div>
    </div>
  );
}
