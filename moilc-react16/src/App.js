import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCrad';
import LikesButton from './components/LikesButton';
import CommentBox from './commentBoard/CommentBox';
import CommentList from './commentBoard/CommentList';
import {message} from 'antd';

const tags = ["可爱多", "倒反天罡"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['this is first reply']
    }
  }

  addComment = comment => {
    console.log(this.state.comments)
    console.log(comment)
    if(comment === null || comment.length === 0)
        message.warning('留言内容不能为空')
    else 
        this.setState({comments: [...this.state.comments, comment]
    });
  }

  deleteComment = (deleteIndex) => {
      console.log(deleteIndex)

      this.setState({
        comments: this.state.comments.filter((item,index) => {
          return index !== deleteIndex
        })
    })
  }
  
  render() {
    const {comments} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <NameCard name="zhangya" number={123456} isHuman tags={tags}/>
        <LikesButton /> */}
        <CommentList 
        comments = {comments}
        onDeleteComment = {this.deleteComment}/>
        <CommentBox
        onAddComment = {this.addComment}
        commentLength = {comments.length}/>
      </div>
    );
  }
}

export default App;
