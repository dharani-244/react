import { useReducer } from "react";
function Tom(state,action){    //in that function there is state and action. action is a String and state store current value we mention
    switch (action.type){
        case "Increment":
            return {
                count:state.count+1
            };
        case "decrement":
            return{
                count:state.count-1
            }; 
        
        default:
            return state;

    }
   
}
function Spike(){
    const [state,dispatch]=useReducer(Tom,{count:0});     // i.e json format
    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={
            ()=>dispatch(
                {
                    type:"Increment"
                }
            )
        }>increment</button>
        <button 
        onClick={
            ()=>dispatch(
                {
                    type:"decrement"
                }
            )
        }>
            decrement
        </button>
        </>
    );

}
export default Spike;