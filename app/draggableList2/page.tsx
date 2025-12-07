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

type Item = { id: string; label: string };

const SortableItem = ({ id, label }: Item) => {
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
      className="p-3 mb-2 bg-green-500 shadow rounded cursor-grab active:cursor-grabbing select-none"
    >
      {label}
    </div>
  );
};

export default function SortableList() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", label: "Item One" },
    { id: "2", label: "Item Two" },
    { id: "3", label: "Item Three" },
    { id: "4", label: "Item Four" },
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
      <header className="text-5xl text-indigo-300 mt-5">
        Draggable List v2
      </header>
      <p className=" text-indigo-300 ">dnd-kit library</p>
      <div className="p-4 w-1/4 mt-8">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
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
    </div>
  );
}
