import { useState, useEffect } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    const fetchData = async()=>{
        const resposnse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await resposnse.json();
        setData(data);
    }

    useEffect(()=>{
        if(count == 5){
            alert("Count is 5")
        }
        if(count == 4){
            fetchData();
        }
    },[count]);

  return (
    <div>
        <h3>{count} New Messages!</h3>
        <button
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={()=> setCount(count +1)}
        >Increase</button>
        <div>
            {data && (
                <ul>
                    <li key={data.id}>
                        <h3>{data.title}</h3>
                    </li>
                </ul>
            )}
        </div>
    </div>
  );
}

export default UseEffect