import React from "react";
import { List, Box } from "@mui/material";
import TodoItem from "./TodoItem";

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (index: number) => void;
    onToggleTodo: (index: number) => void;
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
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        text={todo.text}
                        completed={todo.completed}
                        onDelete={() => onDeleteTodo(index)}
                        onToggle={() => onToggleTodo(index)}
                    />
                ))}
            </List>
        </Box>
    );
};

export default TodoList;