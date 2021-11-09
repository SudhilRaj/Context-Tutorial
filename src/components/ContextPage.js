import axios from "axios";
import { useContext } from "react";
import LoadingSpinner from './LoadingSpinner';
import { TodosContext } from "../context/TodosContext";

const ContextPage = () => {
    const {state, dispatch} = useContext(TodosContext);

    // Fetching data here on a click by using the dispatch method from the context.
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
        <div>
            <h1>Todos</h1>
            <button onClick={() => fetchTodos()}>Fetch Todos Through Context</button>
            {
                loading && <LoadingSpinner/>
            }
            {
                todos && todos.length > 0 &&
                todos.map(todo => (
                    <h3 key={todo.id}>{todo.title}</h3>
                ))
            }
            {
                error && <h3 style={{color: 'red'}}>{error}</h3>
            }
        </div>
     );
}
 
export default ContextPage;