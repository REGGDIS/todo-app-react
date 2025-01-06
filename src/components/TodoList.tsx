import React from "react";
import { List, ListItem, ListItemText, IconButton, Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Animación para las tareas
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
`;

// Crear un conponente de ListItem con animaciones
const AnimatedListItem = styled(ListItem)`
    animation: ${fadeIn} 0.3s ease-in-out;
    &:exit {
        animation: ${fadeOut} 0.3s ease-in-out;
    }
`;

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
                    <AnimatedListItem
                        key={index}
                        divider
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1fr 1fr',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <ListItemText
                            primary={todo.text}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'gray' : 'black',
                                textAlign: 'left',
                            }}
                        />
                        <IconButton edge="end" color="secondary" onClick={() => onDeleteTodo(index)}>
                            <DeleteIcon />
                        </IconButton>
                        <Button
                            variant="outlined"
                            color={todo.completed ? 'secondary' : 'primary'}
                            onClick={() => onToggleTodo(index)}
                            style={{
                                whiteSpace: 'nowrap',
                                minWidth: '250px',    
                            }}
                        >
                            {todo.completed ? 'Desmarcar' : 'Marcar como completada'}
                        </Button>
                    </AnimatedListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;