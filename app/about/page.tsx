"use client";

import { useEffect, useReducer, useRef } from "react";
import type { ChangeEvent, FC, MouseEvent } from "react";

type buttonEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;
type inputEvent = ChangeEvent<HTMLInputElement>;
type divEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

const initialState = {
  count: 0,
};

type ACTIONTYPE =
  | {
      type: "increment";
      payload: number;
    }
  | {
      type: "decrement";
      payload: string;
    };

const counterReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        count: state.count - +action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
};

const About: FC = () => {
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);

  const _changeHandler = (event: inputEvent): void => {
    console.log(event.target);
  };

  const _clickHandler = (event: buttonEvent): void => {};

  const refDiv = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (!refDiv.current) throw new Error("RefDiv is invalid");
  }, []);

  return (
    <div ref={refDiv}>
      <input type="text" onChange={_changeHandler} />
      <button onClick={_clickHandler}></button>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          increase
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: "15" })}>
          decrease
        </button>
        <span>show value of state : {count}</span>
      </div>
    </div>
  );
};

export default About;
