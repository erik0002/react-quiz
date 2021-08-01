import {combineReducers} from 'redux';
import quizReducer from "./quiz";
import CreateReducer from "./create";
import authReducer from "./auth";


export default combineReducers({
    quiz: quizReducer,
    create: CreateReducer,
    auth: authReducer
})
