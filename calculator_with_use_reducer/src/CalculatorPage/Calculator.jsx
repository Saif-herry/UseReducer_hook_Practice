import React, { useReducer} from "react"

const initialState =0;

const reducer= (state,action) => {
    console.log(state,action)
    switch(action.type){
        case "Addition":
            state<10?(state=state+1):(state=10)
            return state
        case "Substract":
            state>1?(state=state-1):(state=0)
            return state
        default:
            return state;
    }

    
}

const Calculator = () => {
//   const [data,setData] = useState
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>{state}</p>
          <button onClick={()=>dispatch({type:"Addition"})}>+</button>
          <button onClick={()=>dispatch({type:"Substract"})}>-</button>  
        </div>
    )
}

export default Calculator;