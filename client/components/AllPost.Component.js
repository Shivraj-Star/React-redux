import React from 'react';
import PostDetailsComponent from './post.details.component';

export default class AllPostComponent extends React.Component {
    render() {
        let postDetailsCreated = this.props.postList.map((p, index) => {
            return <PostDetailsComponent post={p} key={index} />
        })

        return (
            <div>
                <h1>All Posts Component</h1>
                <ul className="list-group">
                    {postDetailsCreated}
                </ul>
            </div>
        )
    }
}