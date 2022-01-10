import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

// Need to remove the !== and change it to the gate symbol in line 4 between post.id and action.payload);
// This code has yellow lines underneath each statements, need to resolve
