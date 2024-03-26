"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragEndEvent,
  UniqueIdentifier,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import DndBox from "./DndBox";

const DndCompoent = () => {
  const [activeId, setActiveId] = useState<null | UniqueIdentifier>(null);
  const [items, setItems] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event?.active?.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active?.id as string);
        const newIndex = items.indexOf(over?.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((id: string) => (
            <DndBox key={id} id={id} handle={true} value={id} />
          ))}
          <DragOverlay>
            {activeId ? (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "red",
                }}
              ></div>
            ) : null}
          </DragOverlay>
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default DndCompoent;
