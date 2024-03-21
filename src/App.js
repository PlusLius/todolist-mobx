import "./App.css";
import BasicDemo from "./pages/BasicDemo.tsx"; 
import TodoList from './pages/TodoList/index.tsx'

function App() {
  return (
    <>
      <h1>Mobx demo</h1>
      <BasicDemo />
      <TodoList/>
    </>
  );
}

export default App;
