import './App.css';
import TodoList from './Components/TodoList';
import InputTextForm from './Components/InputText';
import Counter from "./Components/Counter";


function App() {
  return (
    <div>
      <InputTextForm />
      <Counter/>
      <TodoList/>
    </div>
  );
}

export default App;