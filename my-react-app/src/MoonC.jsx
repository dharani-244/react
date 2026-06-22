import ageContext from "./context.js";
//import userContext from "./context.js";
import Receive from "./Receive.jsx"

function Variant(){
    return(
        <ageContext.Provider value="1">
            <Receive></Receive>
        </ageContext.Provider>
        
    );
}
export default Variant;
