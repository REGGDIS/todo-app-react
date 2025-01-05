import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, Typography, Box } from '@mui/material';

function App() {
  const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState<string[]>(loadTodos);

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
    <Container maxWidth="sm" className="App">
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" color="primary">Todo App</Typography>
      </Box>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;