/*
    App
*/

import React from 'react';
import Section from './Section';
import Clock from './Clock';
import SelectSearch from 'react-select-search';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.links = (this.sectionsToLinksConvert(props.Sections))
    }

    sectionsToLinksConvert(sections) {
        var links = [];
        for (section in sections) {
            for (link in sections[section]) {
                links.push({name:sections[section][link][1], value:sections[section][link][0], section:section})
            }
        }
        return links    
    }
    

    logToConsole(value, state, props) {
        console.log("logged", value["value"], value, state, props)
    }

    onSearchChangeOpenSite(value) {
        window.location.assign(value["value"]);
    }

    componentDidMount() {
        window.addEventListener("keypress", this.setFocusOnSearch)  
    }

    setFocusOnSearch(event) {        
        document.getElementsByClassName("select-search-box")[0].classList.add("select-search-box--focus")
        document.getElementsByClassName("select-search-box__search")[0].focus()
    }

    render() {
        var sections = [];



        for (var section in this.props.Sections) {
            sections.push(<Section key={section} name={section} links={this.props.Sections[section]}/>);
        };

        return ( 
            <div>
                <div>{sections}</div>
                <SelectSearch options={this.links} value="" name="language" placeholder="Choose a website" onChange={this.onSearchChangeOpenSite} />
                <Clock/>
            </div>
        );
    }
};

export default App;