import React from 'react';
import PropTypes from 'prop-types';
import WrapComponent from './WrapComponents';

class B_Component extends React.Component {

    render() {
        return (
            <div>
                我是B
            </div>
        );
    }
}

B_Component.propTypes = {};

export default WrapComponent("结果")(B_Component);
