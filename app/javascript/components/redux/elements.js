// Actions Types constants
const GET_RANDOM_MSG_REQUEST = 'GET_RANDOM_MSG_REQUEST';
const GET_RANDOM_MSG_SUCCSESS = 'GET_RANDOM_MSG_SUCCSESS';

// Initial Data and InitialState
const initialState = {
  msg: { title: 'Hello', body: 'English Message' },
};
// Reducer
export const elementsReducer = (state = initialState, action) => {
  console.log(action.type, 'request');
  switch (action.type) {
    case 'GET_RANDOM_MSG_SUCCSESS':
      return { msg: action.json };
    default:
      return state;
  }
};
// Action Creators
export const getRandomMsgSuccess = (json) => {
  console.log('GetRandomMsg() Action');
  return {
    type: GET_RANDOM_MSG_SUCCSESS,
    json,
  };
};

// Side effects, only as applicable  e.g. Thunks, epics, etc
export const getRandomMsg = () => (dispacth) => {
  dispacth({ type: GET_RANDOM_MSG_REQUEST });
  return fetch('api/v1/randomMessage')
    .then((response) => response.json())
    .then((json) => dispacth(getRandomMsgSuccess(json)))
    .catch((error) => console.log(error));
};
