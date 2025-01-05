import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: string[];
    onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} onDelete={() => onDeleteTodo(index)} />
            ))}
        </ul>
    );
};

export default TodoList;