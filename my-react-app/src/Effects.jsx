import { useEffect } from "react";
function Sparkle(){
    useEffect(
        ()=>{
            console.log("spark in life");
        },[]
    );
    return(
        <h1>Spark</h1>
    );
}
export default Sparkle;