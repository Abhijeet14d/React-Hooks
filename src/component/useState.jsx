import { useState } from "react";

export default function UseState(){
    const [toggleText, settoggleText] = useState(false);

    function handleToggle(){
        settoggleText(!toggleText);
    }
    
    return(
        <div className="border m-3 py-2">
            <h1>UseState Hook</h1>
            <div>
                {
                    toggleText ? <p>Hello world</p> : null
                }
                <button className="bg-blue-500 px-3 py-2 rounded-full" onClick={handleToggle}>Toggle Text</button>
            </div>
        </div>
    );
}