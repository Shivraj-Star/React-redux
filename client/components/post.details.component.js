import React from 'react';
export default class PostDetailsComponent extends React.Component {
    render() {
        let spacing = {
            'letter-spacing': '1px',
            'font-size': '15px',
            'box-shadow': '1px 1px 12px grey'
        }

        return (
            
            <div>
                <ul className="list-group">
                    <li className="list-group-item" style={spacing} >
                        <div><b>Id :</b>{this.props.post.id}</div>
                        <div><b>Caption :</b>{this.props.post.caption}</div>
                        <div>
                            <b>Likes: </b>
                            <button className="btn btn-sm btn-info">{this.props.post.likes} likes</button>
                        </div>
                        <div><img src={this.props.post.display_src} title="Data not found" /></div>

                    </li>
                </ul>
            </div>
        )
    }
}