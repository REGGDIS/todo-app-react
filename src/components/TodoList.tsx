import React from "react";
import { List, Box } from "@mui/material";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <Box>
            <List
                style={{
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onDelete={() => onDeleteTodo(todo.id)}
                        onToggle={() => onToggleTodo(todo.id)}
                    />
                ))}
            </List>
        </Box>
    );
};

export default TodoList;