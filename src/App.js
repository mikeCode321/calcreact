/* eslint-disable no-eval */

import "./App.css";
import CalculatorKey from "./components/CalculatorKey";
import { useState,  } from "react";

function App() {
  let [calc, setCalc] = useState("");

  let ops = ["/", "*", "+", "-", "."];

  let updateCalc = (e) => {
    let { target } = e;
    let { value } = target;

    if (
      ((ops.includes(value) && calc === "")) ||
      ((ops.includes(value) && ops.includes(calc.slice(-1))))
    )
      return;


    setCalc(calc + value);
    
    if (!ops.includes(value)) {
      setCalc(eval(calc + value).toString());
    }
  };

  return (
    <div className="calculator">
      <input type="text" name="inputBox" id="inputBox" value={calc} disabled />
      <hr id="separator" />
      <CalculatorKey update={updateCalc} />
    </div>
  );
}

export default App;
