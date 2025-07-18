import { useReducer, useRef } from "react";


const Inserdata = () => {
        
    const txtname= useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(txtname.current.value)
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
                       <td> <input type="text" /> </td>

                    </tr>
                    <tr>
                        <th>Password</th>
                       <td> <input type="text" /> </td>
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