import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Viewdata=()=>{

    const [users, setusers] = useState([])
    useEffect(()=>{
        axios.get("https://geton.yarainfotech.com/get-data.php").then((Response)=>{
            setusers(Response.data)
        })
    })
    return(
        <>
           <table border={1} cellPadding={7} >
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
                <th></th>
            </tr>
            {
                users.map((e)=>{
                    return(
                        <>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        </>
                    )
                })
            }
           </table>
        </>
    )
}
export default Viewdata;