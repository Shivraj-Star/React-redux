import React from 'react';
import {Link} from 'react-router';
export default class MainComponent extends React.Component {
    componentDidMount(){
        this.props.fetchPostsData()
    }
    render() {
        let navStyle = {
            'boxShadow': "1px 1px 12px black",
            'backgroundColor': 'white'
        }

        let boxProps ={
            "background": "white",
            "boxShadow": "1px 3px 7px grey"
        }
        
        return (
            <div>
                <nav className="navbar navbar-default" style={navStyle}>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">React Redux</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/'>Homepage</Link></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="col-md-8 col-md-offset-2" style={boxProps}>
                    {React.cloneElement(this.props.children,this.props)}
                </div>
            </div>
        )
    }
}