import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditUser() {
    const { id } = useParams();
    const url = "http://localhost:3000/users/"+id;
    const navigate=useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        console.log(name,age,email);
        
        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
    }

    const editUser = async()=>{
        let response = await fetch(url,{
            method: "Put",
            body: JSON.stringify({name,age,email})
        });
        response = await response.json();

        if(response){
            alert("User data updated")
            navigate('/');
        }
    }


    return (
        <div>
            <h1>Edit User</h1>

            <div className="form">
                <input type="text" value={name} placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
                <br /><br />
                <input type="text" value={age} placeholder="Enter your name" onChange={(event) => setAge(event.target.value)} />
                <br /><br />
                <input type="text" value={email} placeholder="Enter your name" onChange={(event) => setEmail(event.target.value)} />
                <br /><br />
                <button onClick={editUser}>Edit User</button>
            </div>
        </div>
    )
}