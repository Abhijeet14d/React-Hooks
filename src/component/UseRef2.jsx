import { useEffect } from 'react';
import { useState, useRef } from 'react';

function UseRef2() {
  const [name, setName] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  })

  
  return (
    <div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      <h2>Name: {name}</h2>
      <h2>Count: {count.current}</h2>
    </div>
  );
}

export default UseRef2