import { combineReducers } from "redux";
import { reducer as sessions } from "./sessions/slice";
import { reducer as chats } from "./chats/slice";
import { reducer as profile } from "./profile/slice";
import { reducer as stories } from "./stories/slice";




const rootReducer = combineReducers({
    sessions,
    chats, 
    profile,
    stories
});

export default rootReducer;
