export const ADD_LIKE = "ADD_LIKE";
export const ADD_DISLIKE = "ADD_DISLIKE";

export const addLikeAction = (id) => {
  return {
    type: ADD_LIKE,
    data: { postId: id },
  };
};
export const addDislikeAction = (id) => {
  return {
    type: ADD_DISLIKE,
    data: { postId: id },
  };
};
