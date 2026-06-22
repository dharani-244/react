import { useRef } from "react";
function Example(){
    const inputref=useRef();
    const tom =()=>{
        inputref.current.focus();

    };
    return(
        <>
        <label>Name:</label>
        <input ref={inputref} type="text"/>
        <button onClick={tom}>Enter</button>
        </>
    );
}
export default Example;