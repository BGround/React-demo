import React from 'react';

class ClockApp extends React.Component {
    constructor(props) {
        super(props);
        console.log('clock is start');
        this.state = {
            data: new Date()
        }
    }

    componentDidMount() {
        console.log('clock is mount');
        this.timeID = setInterval(() => this.tick(),1000)
    }

    componentDidUpdate() {
        console.log('clock update')
    }

    componentWillUnmount() {
        console.log('clock unmount');
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            data: new Date()
        });
    }
    
    render() {
        return(
            <div>
                <h3>
                    it is {this.state.data.toLocaleTimeString()}
                </h3>
            </div>
        );
    }
}

export default ClockApp;