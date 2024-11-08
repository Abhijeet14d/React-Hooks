import { useState } from 'react'

export default function UseState2(){
    const [formData, setformData] = useState("","");
    
    return(
        <div className='border m-3 py-3'>
            <h1>Another useState Hook</h1>
            <input onChange={(event)=>{
                setformData({
                    ...formData,
                    name : event.target.value
                })
            }} type='text' name='name' placeholder='Enter Name' />
            <select name='city' onChange={(event)=>{
                setformData({
                    ...formData,
                    city: event.target.value
                })
            }}>
                <option value={""} id="">Select City</option>
                <option value={"bengaluru"} id="bengaluru">Bengaluru</option>
                <option value={"mumbai"} id="mumbai">Mumbai</option>
                <option value={"delhi"} id="delhi">Delhi</option>
            </select>
            <div>
                <p>
                Name is {formData.name}, city is {formData.city}
                </p>
            </div>
        </div>
    );
}