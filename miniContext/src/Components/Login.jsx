import React,{useState,useContext} from "react";
import UserContext from "../Context/userContext";

export function Login() {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({name,password});
    }   
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
             value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder="UserName" />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
    }