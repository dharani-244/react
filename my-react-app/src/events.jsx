import {useState} from "react";
function Bujji()
{
    const[name,getName]=useState("");
    const cook = (e)=>{
        e.preventDefault();
        alert('welcome ' +name);
    };
    return(
        <form onSubmit={cook}>
            <label>
                Name:
            </label>
            <input type="text" onChange={
                (e)=>getName(
                    e.target.value
                    )
                }/>
                <button type="submit">Submit</button>
        </form>
    );
}
export default Bujji; 
