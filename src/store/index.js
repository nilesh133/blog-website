import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from "./reducers/AuthReducer";
import { PostReducer, FetchPosts, FetchPost, UpdatePost, UpdateImage, HomeTestingPosts } from "./reducers/PostReducer";
import { UpdateName, UpdatePassword, UpdateAbout } from "./reducers/ProfileReducer";

const rootReducers = combineReducers({
    AuthReducer,
    PostReducer,
    FetchPosts,
    FetchPost,
    UpdatePost,
    UpdateImage,
    UpdateName,
    UpdatePassword,
    UpdateAbout,
    HomeTestingPosts
});

const middlewares = [thunkMiddleware]
const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;