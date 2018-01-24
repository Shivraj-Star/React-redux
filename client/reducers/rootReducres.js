import {combineReducers} from 'redux';
import posts from './postsReducres';
import comments from './commentsReducer';

let rootReducers = combineReducers({posts,comments})

export default rootReducers;