import React from 'react';
import { Link } from 'react-router';
export default class PostDetailsComponent extends React.Component {
    render() {
        let spacing = {
            'letterSpacing': '1px',
            'fontSize': '15px',
            'boxShadow': '1px 1px 12px grey'
        }

        return (

            <div>
                <ul className="list-group">
                    <li className="list-group-item" style={spacing}>
                        <Link to={`/singlePost/${this.props.post.code}`}>
                            <div><b>Id :</b>{this.props.post.id}</div>
                            <div><b>Caption :</b>{this.props.post.caption}</div>
                        </Link>
                            
                            <div>
                                <b>Likes: </b>
                                <button type="button" onClick={this.props.Increment.bind(this, this.props.index)} className="btn btn-primary" >
                                    {this.props.post.likes} &nbsp; <span className="glyphicon glyphicon-thumbs-up"></span>
                                </button>
                            </div>
                            {/* <div><img src={this.props.post.display_src} title="Data not found" /></div> */}
                    </li>
                </ul>
            </div>
        )
    }
}