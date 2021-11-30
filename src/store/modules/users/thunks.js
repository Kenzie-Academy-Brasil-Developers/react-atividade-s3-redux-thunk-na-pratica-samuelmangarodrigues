import { addComments } from "./actions";

export const addCommentThunk = (comment) => {
  return (dispath, getState) => {
    const { user } = getState();
    const updateUser = { ...user, comments: [...user.comments, comment] };
    dispath(addComments(updateUser));
  };
};
