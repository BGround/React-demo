import React from 'react';
import PropTypes from 'prop-types';
import WrapComponent from './components/WrapComponents'
import A_component from './components/A_Component'
import B_component from './components/B_Component'

class HocApp extends React.Component {
 
    render() {
        return (
            <div className='App'>
                <WrapComponent />
                <A_component name={'张XX'} age={'12'}/>
                <B_component />
            </div>
        );
    }
}

HocApp.propTypes = {};

export default HocApp;
