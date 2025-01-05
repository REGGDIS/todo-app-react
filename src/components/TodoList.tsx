import React from "react";
import { List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
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

interface TodoListProps {
    todos: string[];
    onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
    return (
        <Box>
            <List>
                {todos.map((todo, index) => (
                    <AnimatedListItem key={index} divider>
                        <ListItemText primary={todo} />
                        <IconButton edge="end" color="secondary" onClick={() => onDeleteTodo(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </AnimatedListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;