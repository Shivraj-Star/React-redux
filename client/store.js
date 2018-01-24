import { createStore } from 'redux';
import rootReducres from './reducers/rootReducres';
import posts from './data/posts';
import comments from './data/comments';


let defaultStoreData = { posts, comments }

let store = createStore(rootReducres, defaultStoreData);
export default store; 