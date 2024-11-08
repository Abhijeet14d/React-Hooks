import { useRef } from 'react';

const UseRef = () => {
  const divref = useRef(null);

  const changeStyle =()=>{
    divref.current.style.color = "red";
    divref.current.style.fontSize = "24px";
  }
  return (
    <div>
        <h2>use-Ref Hook</h2>
        <div ref={divref}>
          this is div 
        </div>
        <button className="
          bg-blue-500 px-3 py-2 rounded-full
        "
        onClick={changeStyle}
        >change style</button>
    </div>
  );
}

export default UseRef