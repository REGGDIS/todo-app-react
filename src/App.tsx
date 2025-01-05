import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  // Cargar las tareas del localStorage cuando el componente se monta.
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []); // Este efecto solo se ejecuta una vez, al cargar el componente.


  // Función para agregar una tarea y actualizar localStorage.
  const addTodo = (text: string) => {
    const updatedTodos = [...todos, text];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Guardar en localStorage.
  };

  // Función para eliminar una tarea y actualizar localStorage.
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;