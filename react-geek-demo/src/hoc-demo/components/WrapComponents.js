import React, {Component} from 'react';

export default (title) => WrapComponent => class WrapComponents extends Component {
    render() {
        const {age,...otherProps} = this.props
        return(
            <div className= 'a-container'>
                <div className = 'header'>
                    <div>{title}</div>
                </div>
                <div>
                    <WrapComponent {...otherProps}/>
                </div>
            </div>
        )
    }
}