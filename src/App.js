import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodosProvider } from './context/TodosContext';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import ContextPage from './components/ContextPage';

function App() {
  return (
	<TodosProvider>
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/context">
						<ContextPage />
					</Route>
				</Switch>
			</Router>
		</div>
	</TodosProvider>
  );
}

export default App;
