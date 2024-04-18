// actions/authActions.js
export const loginUser = (credentials) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await fetch('http://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        // Optionally set the user token in local storage or manage session here
      } else {
        throw new Error(data.message || 'Failed to login');
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
  