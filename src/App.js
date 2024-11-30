import './App.css';
import TodoList from './Components/TodoList';
import InputTextForm from './Components/InputText';
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";


function App() {
  return (
    <div>
      <InputTextForm />
      <Counter/>
      <TodoList/>
      <Timer/>
    </div>
  );
}

export default App;