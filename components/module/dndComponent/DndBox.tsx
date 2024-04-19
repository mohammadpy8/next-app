"use clinet";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface DndBoxProps {
  value: string;
  id: string;
  handle: boolean;
}

const DndBox = (props: DndBoxProps) => {
  const { id, value } = props;
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "250px",
    height: "100px",
    border: "2px solid red",
    borderRadius: "15px",
    backgroundColor: "pink",
    margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div>
        <button
          {...listeners}
          {...attributes}
          style={{
            backgroundColor: "red",
            border: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            margin: "5px 10px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "11px",
          }}
        >
          Drag handle
        </button>
        <div
          style={{
            minWidth: "30px",
            minHeight: "20px",
            color: "red",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default DndBox;
