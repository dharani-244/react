import userContext from "./context.js";
import Receive from "./Receive.jsx"

function Variante(){
    return(
        <userContext.Provider value="india">
            <Receive></Receive>
        </userContext.Provider>
    );
}
export default Variante;
