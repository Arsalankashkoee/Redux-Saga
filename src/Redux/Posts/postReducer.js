import { FETCH_POST_REQUEST } from "./postTypes";
import { FETCH_POST_SUCCESS } from "./postTypes";
import { FETCH_POST_FAILURE } from "./postTypes";

//reducer
const initialState = {
  loading: false,
  error: null,
  posts: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true, error: null, posts: {} };

    case FETCH_POST_FAILURE:
      return { ...state, loading: false, error: action.payload, posts: {} };

    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, error: null, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
