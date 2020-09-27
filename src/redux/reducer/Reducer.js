import { ADD_LIKE, ADD_DISLIKE } from "../actions/Actions";

const postsData = [
  {
    id: 1,
    title: "Post 1",
    description:
      "This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.vThis is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.This is post 1.vThis is post 1.This is post 1.This is post 1.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    title: "Post 2",
    description:
      "This is post 2.his is post 2.his is post 2.his is post 2.his is post 2.his is post 2.vhis is post 2.his is post 2.his is post 2.This is post 2.his is post 2.his is post 2.his is post 2.his is post 2.his is post 2.vhis is post 2.his is post 2.his is post 2.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 3,
    title: "Post 3",
    description:
      "This is post 3.This is post 3.This is post 3.vThis is post 3.vThis is post 3.This is post 3.vvThis is post 3.vThis is post 3.This is post 3.This is post 3.This is post 3.This is post 3.vThis is post 3.vThis is post 3.This is post 3.vvThis is post 3.vThis is post 3.This is post 3.",
    likes: 0,
    dislikes: 0,
  },
];

const initialState = {
  posts: postsData,
};

const reducer = (state = initialState, action) => {
  const getPostIndex = () => {
    return state.posts.findIndex((obj) => obj.id === action.data.postId);
  };
  const copyPosts = state.posts.slice();
  switch (action.type) {
    case ADD_LIKE:
      copyPosts[getPostIndex()].likes++;
      return {
        ...state,
        posts: copyPosts,
      };
    case ADD_DISLIKE:
      copyPosts[getPostIndex()].dislikes++;
      return {
        ...state,
        posts: copyPosts,
      };
    default:
      return state;
  }
};

export default reducer;
