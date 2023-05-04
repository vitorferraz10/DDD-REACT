import { TodoProvider } from "./context/TodoProvider";
import { Todo } from "./screen/Home";

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;
