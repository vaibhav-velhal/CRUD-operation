import { useState, useEffect } from "react";

export default function UserList() {
    const url = "http://localhost:3000/users";

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        console.log(response)
        setUserData(response);
    }

    const deleteUser = async(id)=>{
        let response = await fetch(url+"/"+id,{
            method: 'Delete'
        })
        response = await response.json();

        if(response){
            alert("User deleted");
        }
        getUserData();
    }

    return (
        <div>
            <h1>User List</h1>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userData.map((user) => (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}