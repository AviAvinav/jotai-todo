import "./App.css";
import Todo from "./todo";

function App() {
	const handleSubmit = () => { };
	return (
		<div className="container">
			<h1 className="headerText">My Jotai Todo App</h1>
			<p className="description">
				This is a simple todo app made using Jotai and React (and obviously
				Typescript). That is pretty much it I guess, go ahead and try it.
			</p>
			<div className="addTodo">
				<input type="text" />
				<button onSubmit={handleSubmit}>+ Add Todo</button>
			</div>
			<div className="todoList">
				<Todo />
			</div>
		</div>
	);
}

export default App;
