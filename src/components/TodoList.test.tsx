import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

test('debería agregar una tarea a la lista', () => {
    const mockAddTodo = jest.fn(); // Simula la función onAddTodo
    const mockDeleteTodo = jest.fn(); // Simula la función onDeleteTodo
    const mockToggleTodo = jest.fn(); // Simula la función onToggleTodo

    const todos = [{ id: 1, text: 'Nueva tarea', completed: false }]; // Ejemplo de tarea

    render(
        <>
            <TodoForm onAddTodo={mockAddTodo}/>
            <TodoList
                todos={todos}
                onDeleteTodo={mockDeleteTodo}
                onToggleTodo={mockToggleTodo}
            />
        </>
    );

    // Simula la adición de una tarea
    fireEvent.change(screen.getByPlaceholderText('Añadir tarea'), {
        target: { value: 'Nueva tarea' },
    });
    fireEvent.click(screen.getByText('Agregar'));

    // Verifica si la tarea fue añadida
    expect(mockAddTodo).toHaveBeenCalledWith('Nueva tarea');
});