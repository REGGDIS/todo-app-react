import { keyframes } from "@emotion/react";

// Animaciones
export const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
`;

export const fadeOut = keyframes`
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
`;
