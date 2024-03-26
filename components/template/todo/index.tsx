import type { ChangeEvent, MouseEvent } from "react";

interface TodoType {
  id: string | number;
  name: string;
  title: string;
}

type TodoProps = {
  todoItems: TodoType;
  setTodoItems: React.Dispatch<React.SetStateAction<TodoType>>;
};

type inputEvent = ChangeEvent<HTMLInputElement>;
type buttonEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const Todo = (props: TodoProps) => {
  const { setTodoItems, todoItems } = props;

  const generateID = () => {
    return crypto.randomUUID();
  };

  const _ChangeTodoHandle = (event: inputEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    setTodoItems({ ...todoItems, [name]: value, id: generateID() });
  };

  const _TodoClick = (event: buttonEvent) => {
    event.preventDefault();
    const saveToLocalStorage = localStorage.setItem(
      "todo",
      JSON.stringify(todoItems)
    );
    setTodoItems({
      id: "",
      name: "",
      title: "",
    });

    return saveToLocalStorage;
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            name="name"
            value={todoItems.name}
            onChange={_ChangeTodoHandle}
            placeholder="enter your name"
          />
        </div>
        <div>
          <label htmlFor="title">title:</label>
          <input
            type="text"
            name="title"
            value={todoItems.title}
            onChange={_ChangeTodoHandle}
            placeholder="enter your name"
          />
        </div>
        <div>
          <button onClick={_TodoClick}>send</button>
        </div>
      </form>
    </div>
  );
};

export default Todo;
