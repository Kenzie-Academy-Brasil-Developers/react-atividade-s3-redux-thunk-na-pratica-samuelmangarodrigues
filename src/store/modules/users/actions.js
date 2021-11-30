import { ADD_COMMENTS } from "./actionTypes";

export const addComments = (updateUser) => {
  return {
    type: ADD_COMMENTS,
    updateUser,
  };
};
