const Endpoint = '/v1/greeting';

//action types
const FETCH_GREETING = 'FETCH_GREETING';

// initial state
const initialState = '';

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
}

//action creators
export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch(Endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const payload = await response.json();
  dispatch({ type: FETCH_GREETING, payload });
}