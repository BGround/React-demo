import React from 'react';

class LikesButton extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            likes: 0
        };
    }

    increaseLikes= () => {
        console.log(this);
        this.setState({
            likes: this.state.likes+1
        });
    }

    render() {
        return(
            <div className="likes-button-component">
                <button className="btn btn-outline-primary btn-lg" 
                type="button"
                onClick={this.increaseLikes}>
                💄{this.state.likes}
                </button>
            </div>
        )
    }

}

export default LikesButton;
