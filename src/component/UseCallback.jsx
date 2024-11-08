import { useState, useCallback } from "react";
import PrintTable from "./PrintTable";

function UseCallbackExample() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const cssStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);

  return (
    <div style={cssStyle}>
      <h2>useCallback Hook</h2>
      <input
        type="number"
        className="border border-gray-400 p-2 mb-4"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <PrintTable calculateTable={calculateTable} />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setDark(!dark)}
      >
        Toggle
      </button>
    </div>
  );
}

export default UseCallbackExample;