import axios from "axios";
import React, {useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Inserdata = () => {

        const navigate= Navigate();
    const txtname= useRef();
    const txtemail=useRef();
    const txtpassword=useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(txtname.current.value)
        
        const name=txtname.current.value;
        const email=txtemail.current.value;
        const password=txtpassword.current.value;

        const a= new FormData();

        a.set("name", name);
        a.set("email",email);
        a.set("password",password);

        axios.post("https://geton.yarainfotech.com/insert-data.php",a).then((response)=>{
                    if(response.data.status=="true"){
                        navigate("/")
                    }
        })

    }

    return (
        <>
            <form action="" onSubmit={handlesubmit}>
                <table border={1} cellPadding={7} >
                    <tr>
                        <th>Name</th>
                       <td> <input type="text" ref={txtname} /> </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                       <td> <input type="text" ref={txtemail}/> </td>

                    </tr>
                    <tr>
                        <th>Password</th>
                       <td> <input type="text" ref={txtpassword} /> </td>
                    </tr>
                    <tr>
                        <th>
                       <td> <input type="submit" value={"submit"} /> </td>

                        </th>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default Inserdata;