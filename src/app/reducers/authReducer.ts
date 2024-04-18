import { Action} from 'redux';
import { AuthState, AuthActionTypes, User } from '../types/authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null
};

const authReducer = (state: AuthState = initialState, action: Action<string> & { payload?: User; error?: string }): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_USER as string:
        case AuthActionTypes.REGISTER_USER as string:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload!,
                error: null
            };
        case AuthActionTypes.LOGOUT_USER as string:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null
            };
        default:
            return state;
    }
};

export default authReducer;

