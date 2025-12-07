"use client";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

type Item = { id: string; label: string; background: string };

const SortableItem = ({ id, label, background }: Item) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${background} p-3 shadow rounded cursor-grab active:cursor-grabbing select-none`} // can return margins later if needed
    >
      {label}
    </div>
  );
};

export default function SortableList() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", label: "Item One", background: "bg-green-500" },
    { id: "2", label: "Item Two", background: "bg-red-500" },
    { id: "3", label: "Item Three", background: "bg-yellow-500" },
    { id: "4", label: "Item Four", background: "bg-blue-500" },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);

    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-white mt-5">Tournament Bracket</header>
      <p className=" text-white ">dnd-kit library</p>
      <div className=" w-1/4 mt-8">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToParentElement, restrictToVerticalAxis]} //adds verticla dragging limitation
        >
          <SortableContext
            items={items.map((i) => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {items.map((item) => (
              <SortableItem key={item.id} {...item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className=""></p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
