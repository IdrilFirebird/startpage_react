/*
    App
*/

import React from 'react';
import Section from './Section';
import Clock from './Clock';

class App extends React.Component {

    render() {
        var sections = [];
        for (var section in this.props.Sections) {
            sections.push(<Section key={section} name={section} links={this.props.Sections[section]}/>);
        };

        return ( 
            <div>
                <div>{sections}</div>
                <Clock/>
            </div>
        );
    }
};

export default App;