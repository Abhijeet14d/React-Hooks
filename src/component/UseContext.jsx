import { useContext } from "react";
import { LoginContext } from "../context/Logincontext";

function UseContext() {
    const login = useContext(LoginContext);
  return (
    <div>
        <h2>Use Context Hook</h2>
        <h3>Name: {login.name}</h3>
        <p>Age: {login.age}</p>
        <p>City: {login.city}</p>
    </div>
  );
}

export default UseContext