import { ADD_COMMENTS } from "./actionTypes";
const initialState = { state: "Kenzie", comments: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return action.updateUser;
    default:
      return state;
  }
};
export default userReducer;
