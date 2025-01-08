import { transform } from "typescript";

export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.app.json',
        },
    },
    moduleNameMapper: {
        // Mapea módulos que Jest no puede resolver
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Transforma archivos TypeScript
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Soporte para extensiones comunes
};