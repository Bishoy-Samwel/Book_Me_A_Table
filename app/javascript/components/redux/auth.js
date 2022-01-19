/* eslint-disable import/prefer-default-export */
// Actions Types
const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
const SET_USER_IN_PROGRESS = 'SET_USER_IN_PROGRESS';
const SET_USER_FAILURE = 'SET_USER_FAILURE';
const LOG_OUT = 'LOG_OUT';

// Initial State
const initialState = {
  user: null,
  isLoading: false,
};

// Reducer
export const authenticationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_SUCCESS: {
      const { user } = payload;
      return {
        ...state, user, isLoading: false,
      };
    }
    case SET_USER_IN_PROGRESS:
      return {
        ...state, isLoading: true,
      };
    case SET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        use: {},
      };
    default:
      return state;
  }
};

// Action Creators
export const setUserSuccess = (user) => (
  { type: SET_USER_SUCCESS, payload: { user } }
);

const setUserInProgress = () => (
  { type: SET_USER_IN_PROGRESS }
);

const setUserFailure = () => (
  { type: SET_USER_FAILURE }
);

export const logOut = () => (
  { type: LOG_OUT }
);

// Thunks ( or any side effects )
export const login = (userInput) => (
  async (dispatch) => {
    try {
      dispatch(setUserInProgress());
      const response = await fetch('api/v1/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput),
      });
      const data = await response.json();
      await localStorage.setItem('token', data.token);
      dispatch(setUserSuccess(data.user));
    } catch (e) {
      dispatch(setUserFailure);
    }
  }
);

export const loggedIn = () => (
  async (dispatch) => {
    try {
      dispatch(setUserInProgress());
      if (localStorage.getItem('token')) {
        const response = await fetch('api/v1/login', { headers: { Authenticate: localStorage.token } });
        const user = await response.json();
        dispatch(setUserSuccess(user));
      }
    } catch (e) {
      dispatch(setUserFailure);
    }
  }
);
