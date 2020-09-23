const defaultState = {
  isLogin: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'SET_USER') {
    return { ...state, user: action.payload };
  }
  return state;
};

export default reducer;
