import { combineReducers } from 'redux';
import { quizReducer } from '../../features/Quiz/model';

// do I need to create a Question/model -> questionReducer and add?
export const reducer = combineReducers({ quizReducer });
