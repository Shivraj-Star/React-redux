import { createStore,applyMiddleware } from 'redux';
import rootReducres from './reducers/rootReducres';
import ReduxThunk from 'redux-thunk'
import posts from './data/posts';
import comments from './data/comments';


let defaultStoreData = { posts, comments }

let store = createStore(rootReducres, applyMiddleware(ReduxThunk));
export default store; 