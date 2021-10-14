import { combineReducers } from "redux";
import { reducer as sessions } from "./sessions/slice";
import { reducer as chats } from "./chats/slice";


const rootReducer = combineReducers({
    sessions,
    chats
});

export default rootReducer;
