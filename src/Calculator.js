import React from "react";
import { Display } from "./Display";
import { Cells } from "./Cells";
import { Cell } from "./Cell";

export const Calculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="calculator">
      <div className="answer">
        <Display />
      </div>
      <div className="cells">
        {numbers.map((val, id) => (
          <Cell value={val} />
        ))}
      </div>
    </div>
  );
};
