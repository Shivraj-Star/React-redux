import React from 'react';
import { Link } from 'react-router';
export default class CommentComponent extends React.Component {
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
                        <b>{this.props.comment.user} : </b> {this.props.comment.text}
                        <span className="pull-right"><button className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-trash"></i></button></span>
                    </li>
                </ul>
            </div>
        )
    }
}