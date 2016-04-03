/* 
    Clock.js
*/

import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()  
        };
    }


    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);  
    }

    componentWillUnmount() {
        clearInterval(this.timer);  
    }

    tick() {
        this.setState({time: new Date()})
    }

    render() {
        return <div id="clock">{this.state.time.toLocaleTimeString()}</div>;
    }
}

export default Clock;
