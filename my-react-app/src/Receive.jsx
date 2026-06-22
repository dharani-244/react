import { useContext } from "react";
import userContext from "./context.js";

function Lion(){
   const shero=useContext(userContext);     <h1>{shero}</h1>
    
    return(
        <>
        
        <h1>{shero}</h1>
    
      
        </>
    );
}

export default Lion;
