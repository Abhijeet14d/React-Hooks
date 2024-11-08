import { useState, useEffect } from 'react';

function UseEffect2() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `${count} Title`;
    },[count]);
  return (
    <div>
        <h2>{count} Title</h2>
        <button
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={()=> setCount(count +1)}
        >Increase</button>
    </div>
  );
}

export default UseEffect2