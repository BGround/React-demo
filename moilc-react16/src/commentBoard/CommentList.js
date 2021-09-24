import React from 'react'

class CommentList extends React.Component {

    removeElement = event => {
        event.target.parentElement.remove();
    }

    render() {
        const { comments } = this.props;
        return (
            <div className="comment-list-component">
                <label htmlFor="">评论列表</label>
                <ul className="list-group mb-3">
                    {
                        comments.map((comment, index) =>
                            <li key={index} className="list-group-item">
                                {comment}&nbsp;&nbsp;
                                {/* 
                                //这个是第一种方式删除，直接在文件中操作删除元素
                                <a className="btn btn-link text-danger"onClick={this.removeElement}>删除</a>  */} 
                                {/* 这个是第二种方式，通过状态提升，将删除的节点index传到父节点，进行删除 */}
                                <button type="delete" className="btn btn-danger btn-sm ml-3" data-id={index} onClick={() => {this.props.onDeleteComment(index)}}>删除</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}


/* const CommentList = ({comments}) => {
        return(
            <div className = "comment-list-component">
                <label>评论列表</label>
                <ul className = "list-group mb-3">
                    {
                        comments.map((comment,index) => 
                            <li key={index} className="list-group-item">{comment}</li>;
                            // <button type="delete" className="btn btn-primary" >删除</button>
                            <a 
                                className="btn btn-link text-danger"
                                onClick={this.onClickDelete}
                            >删除</a>
                        )
                    }
                </ul>
                
            </div>
        );
} */

export default CommentList;