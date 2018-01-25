import { connect } from 'react-redux';
import MainComponent from './Main.Component';
import * as allActions from '../actions/action';
import {bindActionCreators} from 'redux';

let mapDispatchToProps = (dispach) => {
    return bindActionCreators(allActions,dispach)
}

let mapStateToProps = (storeData) => {
    debugger;
    return {
        postList: storeData.posts,
        commentList: storeData.comments
    }
}
let App = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default App;






