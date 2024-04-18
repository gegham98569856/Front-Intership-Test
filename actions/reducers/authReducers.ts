const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTH_START':
        return { ...state, loading: true, error: null };
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, user: action.payload, loading: false, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  