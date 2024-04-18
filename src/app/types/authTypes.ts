export enum AuthActionTypes {
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    REGISTER_USER = 'REGISTER_USER'
}

export interface User {
    fullName: string;
    username: string;
    email: string;
    password: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
}

