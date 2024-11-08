import { useReducer } from "react";

const initialState = {count:0}

const ACTION ={
    INCREASE: "increase",
    DECREASE: "decrease"
}

const reducer = (state, action)=>{
    switch(action.type){
        case ACTION.INCREASE:
            return {count: state.count + 1}
        case ACTION.DECREASE:
            return {count: state.count - 1}
        default:
            return state
    }
}

function UseReducer() {
    const [state, dispatch] =  useReducer(reducer,initialState)
    const increasecount =()=>{
        dispatch({type: ACTION.INCREASE})
    }
    const decreasecount =()=>{
        dispatch({type: ACTION.DECREASE})
    }
  return (
    <div>
        <h2>useReducer Hook</h2>
        <h2>count : {state.count}</h2>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={increasecount}
        >+</button>
        <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={decreasecount}
        >-</button>
    </div>
  )
}

export default UseReducer