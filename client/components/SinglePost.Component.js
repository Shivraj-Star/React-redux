import React from 'react';
import PostDetailsComponent from './post.details.component';
import CommentComponent from './comment.component';
import { Link } from 'react-router'

export default class SinglePostComponent extends React.Component {

    render() {
        let code = this.props.params.codeId;
        let index = this.props.postList.findIndex((p, i) => p.code === code)
        let currentPost = this.props.postList.find((p, i) => {
            if (p.code == code) {
                return true
            }
        })
        let myComments = this.props.commentList[code] || [];
        let commentDetailsCreated = myComments.map((c, index) => {
            return <CommentComponent comment={c} key={index} index={index} {...this.props} />
        })
        
        return (
            <div>
                <h1>Single Post</h1>
                <ul className="list-group">
                    <PostDetailsComponent post={currentPost} key={index} index={index} {...this.props} />
                </ul>
                <h4 className="text-info">Comment List</h4>
                <ul className="list-group">
                    {commentDetailsCreated}
                </ul>
                

                <div className="text-right">
                    <Link to='/'><b>Back to All post</b></Link>
                </div>
            </div>
        )
    }
}