/*
    App
*/

import React from 'react';
import Section from './Section';
import Clock from './Clock';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.typed = ''
        this.shortcutArray = Object.keys(this.props.shortcuts)
        this.timeoutID = undefined
    }

    

    hasSubstring(element) {
        if(this.typed==element) {
            window.location.replace(this.props.shortcuts[this.typed]);
        }

    }

    componentWillMount() {
        window.addEventListener("keypress", this.shortcutDetection.bind(this))     
    }

    shortcutDetection(e){
        var ekey = e.charCode
        this.typed = this.typed + String.fromCharCode(ekey);

        this.delayedSiteOpen();

    }

    delayedSiteOpen(){
        window.clearTimeout(this.timeoutID);
        this.timeoutID = window.setTimeout(this.openSite.bind(this), 1000);
    }

    openSite() {
        this.shortcutArray.some(this.hasSubstring.bind(this))
        this.typed = ''; // Clean typed, so that we can watch for the next keybinding
    }

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