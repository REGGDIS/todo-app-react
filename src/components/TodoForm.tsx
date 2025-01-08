import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { keyframes } from "@emotion/react";
import styled from '@emotion/styled';

// Animación de entrada para el formulario
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity; 1; transform: translateY(0); }
`;

const AnimatedBox = styled(Box)`
    animation: ${fadeIn} 0.3s ease-in-out;
`;

interface TodoFormProps {
    onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoText.trim()) {
            onAddTodo(todoText);
            setTodoText("");
        }
    };

    return (
        <AnimatedBox>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nueva tarea"
                    placeholder="Añadir tarea"
                    variant="outlined"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                    Agregar
                </Button>
            </form>
        </AnimatedBox>
    );
};

export default TodoForm;