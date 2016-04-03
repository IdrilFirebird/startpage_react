//Section

import React from 'react';

class Section extends React.Component{

    componentDidMount() {
        this.mouseOut();
    }

    setlink(link) {
        var linkurl = link[0]
        var linkName = link[1]
        var linkShortcut = link[2]
        return(
            <li key={linkName}><a href={linkurl}>{linkName}</a></li>
        )

    }

    mouseOver() {
        var heightToSet = this.refs.linkList.offsetHeight + this.refs.linkList.offsetTop/2;
        this.refs.linkContainer.style.height=heightToSet + "px";
    }

    mouseOut() {
        this.refs.linkContainer.style.height=0;
    }

    render() {

        var links = [];
        for(var link in this.props.links){
            links.push(this.setlink(this.props.links[link]))
        }
 
        return (
                <div className="block" onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)} >
                <h1>{this.props.name}</h1>
                <div ref="linkContainer" style={linkContainer}>
                    <ul ref="linkList">{links}</ul>
                </div>
                </div>
            
        );
    }
};

var linkContainer = {
    overflow: "hidden",
    transition: "height 0.5s"
}

export default Section