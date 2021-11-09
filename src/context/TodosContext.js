import {createContext, useReducer} from "react";

export const TodosContext = createContext();

export const TodosProvider = (props) => {

    // Setting a reducer to manage multiple state values
    const initialState= {
        loading: false,
        todos: [],
        error:''
    }
    const reducer = (state=initialState, action) => {
        switch(action.type){
            case 'FETCH_REQUEST' :
                return{
                    ...state,
                    loading: true
                }
            case 'FETCH_SUCCESS' :
                return{
                    ...state,
                    loading: false,
                    todos: action.payload,
                    error:''
                }
            case 'FETCH_ERROR' :
                return{
                    ...state,
                    loading: false,
                    todos: [],
                    error: action.payload
                }
            default: return state
        }
    }

    // Setting the global state and dispatch method using useReducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <TodosContext.Provider value={{state, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}
