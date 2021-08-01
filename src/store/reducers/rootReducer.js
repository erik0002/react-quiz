import {combineReducers} from 'redux';
import quizReducer from "./quiz";
import CreateReducer from "./create";


export default combineReducers({
    quiz: quizReducer,
    create: CreateReducer
})
