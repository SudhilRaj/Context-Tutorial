import axios from "axios";
import { useContext } from "react";
import LoadingSpinner from './LoadingSpinner';
import { TodosContext } from "../context/TodosContext";
import { ThemeContext } from "../context/ThemeContext";

const ContextPage = () => {
    const {state, dispatch} = useContext(TodosContext);
    const{theme} = useContext(ThemeContext);
    const darkMode = theme.darkMode;

    // Fetching data here on a click by using axios. Using the dispatch method to update the context.
    // You can also opt an useEffect method directly inside the context to perform these actions,
    // Then we need to send only the state values from the context not the dispatch method.
    const fetchTodos = () => {
        dispatch({type: 'FETCH_REQUEST'});
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR', payload: error.message})
        })
    }

    const {loading, todos, error} = state;
    return ( 
        <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
            <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
                Todos
            </h1>
            <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={() => fetchTodos()}>Fetch Todos Through Context</button>
            {
                loading && <LoadingSpinner/>
            }
            {
                todos && todos.length > 0 &&
                todos.map(todo => (
                    <p className={`${darkMode ? "para-dark" : "para-light"}`} key={todo.id}>{todo.title}</p>
                ))
            }
            {
                error && <h3 style={{color: 'red'}}>{error}</h3>
            }
        </div>
     );
}
 
export default ContextPage;
