import { POSTS, COMMENTS } from "../constants";
import { combineReducers } from "redux";

const reducerLoadPosts = (state = false, action) => {
  switch (action.type) {
		case POSTS.LOADING:
      return false;
			case POSTS.LOAD_SUCCESS:
				return true;
    case POSTS.ERROR:
      return false;
    default:
      return state;
  }
};

const reducerLoadComments = (state = false, action) => {
  switch (action.type) {
		case COMMENTS.LOADING:
      return false;
			case COMMENTS.LOAD_SUCCESS:
				return true;
    case COMMENTS.ERROR:
      return false;
    default:
      return state;
  }
};
const reducersLoad = combineReducers({
  isLoadPosts: reducerLoadPosts,
  isLoadComments: reducerLoadComments,
});

export default reducersLoad;