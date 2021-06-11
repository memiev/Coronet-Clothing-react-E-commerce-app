import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null, // =false
};

const userReducer = (state = INITIAL_STATE, action) => {
  // if state ever undefined we pass default value
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
