import React from "react";
import {useContext,useState} from "react";
import UserContext from "../Context/userContext";

export function Profile() {
    const {user}=useContext(UserContext);
        if(!user){
            return (<h1>Please login</h1>)
        }
        
            return (
                <div>
                    <h2>Profile</h2>
                    <h3>{user.name}</h3>
                </div>
            )
        
    
}