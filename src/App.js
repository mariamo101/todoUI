import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="todoUI">
        <h1 className="todo">Todo</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
