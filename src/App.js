import React from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            comments: [
                {id: 1, author: "Mr. A", body: "Hello New Comment A"},
                {id: 2, author: "Mr. B", body: "Hello New Comment B"}
            ]
        };
    }

    render() {
        return <div>
            <CommentForm addComment={this.addComment.bind(this)}/>
            {this.getComments()}
        </div>;
    }

    getComments() {
        return this.state.comments.map(comment => {
            return <Comment key={comment.id} author={comment.author} body={comment.body}/>
        });
    }

    addComment(author, body) {
        let comment = {id: this.state.comments.length + 1, author: author, body: body};
        let newComments = this.state.comments;
        newComments.push(comment);
        this.setState({
            comments: newComments
        });
    }
}

export default App;