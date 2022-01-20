// Actions Types constants
const GET_RANDOM_MSG_REQUEST = 'GET_RANDOM_MSG_REQUEST';
const GET_RANDOM_MSG_SUCCSESS = 'GET_RANDOM_MSG_SUCCSESS';
const LOAD_ELEMENTS_IN_PROGRESS = 'LOAD_ELEMENTS_IN_PROGRESS';
const LOAD_ELEMENTS_SUCCESS = 'LOAD_ELEMENTS_SUCCESS';
const LOAD_ELEMENTS_FAILURE = 'LOAD_ROCKETS_FAILURE';

// Initial Data and InitialState
const initialState = {
  msg: { title: 'Hello', body: 'English Message' },
  isLoading: false,
  data: [],
};
// Reducer
export const elementsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_RANDOM_MSG_SUCCSESS':
      return { msg: action.json };
    case LOAD_ELEMENTS_SUCCESS: {
      const { elements } = payload;
      return {
        ...state, isLoading: false, data: elements,
      };
    }
    case LOAD_ELEMENTS_IN_PROGRESS:
      return {
        ...state, isLoading: true,
      };
    case LOAD_ELEMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
// Action Creators
export const getRandomMsgSuccess = (json) => ({
  type: GET_RANDOM_MSG_SUCCSESS,
  json,
});

const loadElementsInProgress = () => ({ type: LOAD_ELEMENTS_IN_PROGRESS });

const loadElementsSuccess = (elements) => ({ type: LOAD_ELEMENTS_SUCCESS, payload: { elements } });

const loadElementsFailure = () => ({ type: LOAD_ELEMENTS_FAILURE });

// Side effects, only as applicable  e.g. Thunks, epics, etc
export const getRandomMsg = () => (dispacth) => {
  dispacth({ type: GET_RANDOM_MSG_REQUEST });
  return fetch('api/v1/randomMessage')
    .then((response) => response.json())
    .then((json) => dispacth(getRandomMsgSuccess(json)));
    // .catch((error) => console.log(error));
};

export const loadElements = () => (
  async (dispatch) => {
    try {
      dispatch(loadElementsInProgress());
      const response = await fetch('api/v1/restaurants');
      const elements = await response.json();
      dispatch(loadElementsSuccess(elements));
    } catch (e) {
      dispatch(loadElementsFailure());
    }
  }
);
