import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Inserdata from "./Insertdata";

const Viewdata = () => {

    const [users, setusers] = useState([])
    useEffect(() => {
        fetchdata();
    }, [])


    const fetchdata = () => {
        axios.get("https://geton.yarainfotech.com/get-data.php").then((Response) => {
            setusers(Response.data)
        })

    }
    const handledelete = (e) => {
        const id = e.target.getAttribute("data");

        const a = new FormData();
        a.set('id', id);
        axios.post("https://geton.yarainfotech.com/delete-data.php", a).then(function () {
            fetchdata();
         })
    }

    return (
        <>
        <Link to="insertdata">Add Data</Link>
            <table border={1} cellPadding={7} >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
                {
                    users.map((e) => {
                        return (
                            <>
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td><button>Edit</button></td>
                                    <td><button onClick={handledelete} data={e.id}>Delete</button></td>
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