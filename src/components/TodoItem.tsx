import React from "react";
import { ListItem, ListItemText, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Animaciones
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
`;

// Componente con animaciones
const StyledListItem = styled(ListItem)`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    gap: 10px;
    animation: ${fadeIn} 0.3s ease-in-out;

    &:exit {
        animation: ${fadeOut} 0.3s ease-in-out;
    }
`;

interface TodoItemProps {
    text: string;
    completed: boolean;
    onDelete: () => void;
    onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onDelete, onToggle }) => {
    return (
        <StyledListItem divider>
            <ListItemText
                primary={text}
                style={{
                    textDecoration: completed ? "line-through" : "none",
                    color: completed ? "gray" : "black",
                    textAlign: "left",
                }}
            />
            <IconButton edge="end" color="secondary" onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
            <Button
                variant="outlined"
                color={completed ? "secondary" : "primary"}
                onClick={onToggle}
                style={{
                    whiteSpace: "nowrap",
                    minWidth: "250px",
                }}
            >
                {completed ? "Desmarcar" : "Marcar como completada"}
            </Button>
        </StyledListItem>
    );
};

export default TodoItem;