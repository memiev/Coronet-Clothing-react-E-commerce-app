const INITIAL_STATE = {
  currentUser: null, // =false
};

const userReducer = (state = INITIAL_STATE, action) => {
  // if state ever undefined we pass default value
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default  userReducer;