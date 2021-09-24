import React from 'react'

class CommentBox extends React.Component {

    handleSubmit = (event) => {
        this.props.onAddComment(this.textInput.value)
        event.preventDefault();
    }

    componentDidUpdate(prevProps, prevState) {
        document.getElementById('comment').value = ""
    }

    render() {
        return(
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="from-group">
                    <label>留言内容</label>
                    <input
                        id='comment'
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => {this.textInput = textInput}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    发布
                </button>
                <p>已有{this.props.commentLength}条评论</p>
            </form>
        );
    }
}

export default CommentBox;