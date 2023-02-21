import React from "react";
import { useValue, DEFAULT_ACTIONS } from "../src/libs/State";
import { colorGenerator } from "./utils/generateColor";
type Props = {};

function Color({}: Props) {
  const value = useValue();
  const { Switch, Blue } = DEFAULT_ACTIONS;

  return (
    <>
      <div
        onClick={() => {
          {
            //   console.log(colorGenerator());
            value.dispatch({ type: Switch, payload: colorGenerator() });
          }
        }}
        style={{ width: 300, height: 300, background: value.color }}
      ></div>
      <button onClick={() => value.dispatch({ type: Blue, payload: "" })}>
        Reset
      </button>
    </>
  );
}

export default Color;
