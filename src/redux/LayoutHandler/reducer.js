const initialState = {
  measure: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MEASURE': {
      console.log(action);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
