"use client"

import TodoComponent from "@/components/template/todo";
import React, { useState } from "react";

interface TodoType {
  id: string | number;
  name: string;
  title: string;
}

const Todo = () => {
  const [todoItems, setTodoItems] = useState<TodoType>({
    id: "",
    name: "",
    title: "",
  });

  return (
    <React.Fragment>
      <TodoComponent todoItems={todoItems} setTodoItems={setTodoItems} />
    </React.Fragment>
  );
};

export default Todo;
