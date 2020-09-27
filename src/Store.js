import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import PostsReducer from "./redux/reducer/Reducer";

const rootReducer = combineReducers({ PostsData: PostsReducer });

export const middlewares = [thunk];
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
