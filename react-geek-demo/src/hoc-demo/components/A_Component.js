import React from 'react';
import PropTypes from 'prop-types';
import WrapComponent from './WrapComponents';

class A_Component extends React.Component {

    render() {
        return (
            <div>
                我的名字是: {this.props.name}
                <br />
                我的年龄是：{this.props.age}
                <br />
                <img src={require('../images/B.jpg')} alt="aaa"/>

            </div>
        );
    }
}

A_Component.propTypes = {};

export default WrapComponent("提示")(A_Component);
