import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  // Cargar las tareas desde el localStorage
  const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  
  // Guardar las tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'pending') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('pending')}>Pendientes</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
      </div>
      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;