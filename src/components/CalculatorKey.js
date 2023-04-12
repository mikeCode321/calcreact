import React from "react";

function CalculatorKey({ calculates, update }) {
  return (
    <div className="calculator-keys">
      <button type="button" className="operator" value="+" onClick={update}>
        +
      </button>
      <button type="button" className="operator" value="-" onClick={update}>
        -
      </button>
      <button type="button" className="operator" value="*" onClick={update}>
        &times;
      </button>
      <button type="button" className="operator" value="/" onClick={update}>
        &divide;
      </button>

      <button type="button" value="7" onClick={update}>
        7
      </button>
      <button type="button" value="8" onClick={update}>
        8
      </button>
      <button type="button" value="9" onClick={update}>
        9
      </button>

      <button type="button" value="4" onClick={update}>
        4
      </button>
      <button type="button" value="5" onClick={update}>
        5
      </button>
      <button type="button" value="6" onClick={update}>
        6
      </button>

      <button type="button" value="1" onClick={update}>
        1
      </button>
      <button type="button" value="2" onClick={update}>
        2
      </button>
      <button type="button" value="3" onClick={update}>
        3
      </button>

      <button type="button" value="%">
        %
      </button>
      <button type="button" value="0" onClick={update}>
        0
      </button>
      <button type="button" className="decimal" value="." onClick={update}>
        .
      </button>
      <button type="button" className="all-clear" value="C">
        C
      </button>
    </div>
  );
}

export default CalculatorKey;
