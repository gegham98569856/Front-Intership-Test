import { AuthActionTypes, User } from '../types/authTypes';

export const loginUser = (userData: User) => ({
    type: AuthActionTypes.LOGIN_USER,
    payload: userData
});

export const logoutUser = () => ({
    type: AuthActionTypes.LOGOUT_USER
});

export const registerUser = (userData: User) => ({
    type: AuthActionTypes.REGISTER_USER,
    payload: userData
});
