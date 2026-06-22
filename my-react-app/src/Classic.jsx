import { useState } from "react";

import App from "./App.jsx";
function Elements(){
    const [name,getName]=useState("");
    return (
        <>
        <label>
            Name:<input type="text" onChange={
                (e)=>getName(e.target.value)

            }/>
        </label>
        <h1>{name}</h1>
        </>
    );
}
function Master(){
    const [sample,setName]=useState("birds");
    return(
        <>
        <h1>{sample}</h1>
        <button
        style={{width:"fit-content"}}
        onDoubleClick={()=>setName("Avians")}>
            change
        </button>
        </>
    );
}
function Classic(){


    /*const[show,setShow]=useState(false);
    return(
        <>
        <button
        onClick={()=>setShow(!show)}
        >reveal</button>
        {show && <App/>}
        
        </>
        
    );*/
   const [count,setCount]=useState(0);
    return(
        <>
       
        <h1>Count:{count}</h1>
         <div style={{display:"flex",gap:"10px" }}>
        <button
        style={{width:"fit-content"}}
        onClick={()=>setCount(count+1)}>
            Count+
        </button>
        
        <button
        style={{width:"fit-content"}}
        onClick={()=>setCount(count-1)}>
          Count-
        </button>
        </div>
        <Master></Master>
        <Elements/>
        <App/>
        </>
    );
}
export default Classic;