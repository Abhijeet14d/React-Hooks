import { useState, useMemo } from "react";

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memoCal = useMemo(()=>{
        return expensive(number)
    },[number])
    
    const cssStyle = {
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
    }
  return (
    <div style={cssStyle}>
        <h2>useMemo Hook</h2> 
        <input 
        type="number"
        className="border border-gray-400 p-2 mb-4"
        placeholder="Enter a number"
        value = {number}
        onChange={(e)=>setNumber(e.target.valueAsNumber)}
         />
         <h2>Calculation: {memoCal}</h2>
         <button
         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
         onClick={()=>{setDark(!dark)}}
         >Toggle</button>
    </div>
  );
}

function expensive(num){
    console.log("Calculating...");
    for(let i = 0; i<1000000000; i++){ i+= 1}
    return num;
}

export default UseMemo