import { useState, useEffect, useLayoutEffect, useRef } from "react";


function UseLayoutEffect() {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef()
  useLayoutEffect(()=>{
    if(textRef.current != null){
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  },[toggle])
  useEffect(()=>{
    console.log("I'm slower than useLayoutEffect me hu useEffect");
  },[toggle])
  return (
    <div>
        <h2>UseLayoutEffect Hook</h2>
        <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{setToggle(!toggle)}}
        >Toggle</button>
        {toggle && <h1 ref={textRef}>This is some code!</h1>}
    </div>
  )
}

export default UseLayoutEffect