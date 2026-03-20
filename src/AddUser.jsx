import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser(){

    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [email,setEmail]=useState();
    const navigate=useNavigate();

    const createUser = async()=>{
        const url="http://localhost:3000/users";
        let response = await fetch(url,{
            method: 'Post',
            body: JSON.stringify({name,age,email})
        });
        response = await response.json();
        
        if(response){
            alert("New user created");
            navigate('/')
        }
    }

    return(
        <div>
            <h1>Add User</h1>

            <div className="form">
                <input type="text" placeholder="Enter your name" onChange={(event)=>setName(event.target.value)} />
                <br /><br />
                <input type="text" placeholder="Enter your age" onChange={(event)=>setAge(event.target.value)} />
                <br /><br />
                <input type="text" placeholder="Enter your email" onChange={(event)=>setEmail(event.target.value)} />
                <br /><br />
                <div className="button-section">
                    <button onClick={createUser}>Add User</button>
                </div>
            </div>
        </div>
    )
}