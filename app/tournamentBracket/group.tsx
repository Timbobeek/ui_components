"use client";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import { Team } from "./teams";

type SortableListProps = {
  items: Team[]; // or do i use TeamProps here?
  setItems: (items: Team[]) => void;
};

const SortableTeam = ({ id, label, background }: Team) => {
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

export default function SortableList({ items, setItems }: SortableListProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);

    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="">
      <div className=" mt-8">
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
              <SortableTeam key={item.id} {...item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
