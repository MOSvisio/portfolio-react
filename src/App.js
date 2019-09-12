import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

class App extends Component {
    constructor() {
        super(); 
        this.state = {
            show: "home",
            isFinished: true
        }
    };

    onLinkClick =  (event) => {
        event.preventDefault();
        const object = event.target.id;
        if (object === "homeLink" && this.state.show !== "home"){
            this.setState({
                show: "home"
            });
            this.fadeInComponent();
        }
        else if (object === "aboutLink" && this.state.show !== "about"){
            this.setState({
                show: "about"
            });
            this.fadeInComponent();
        }
        else if (object === "projectLink" && this.state.show !== "project"){
            this.setState({
                show: "project"
            });
            this.fadeInComponent();
        }
        else if (object === "contactLink" && this.state.show !== "contact"){
            this.setState({
                show: "contact"
            });
            this.fadeInComponent();
        }
    };

    onContactMeClick = () => {
        this.setState({
            show: "contact"
        });
        this.fadeInComponent();
    }

    stopFadeIN = () => {
        this.setState({
            isFinished: true
        });
    }

    fadeInComponent = () => {
        var elem = document.getElementById("content");
        elem.style.opacity = 0;
        var opacity = 0;
        var timer = null
        if (this.state.isFinished === true)
        {
            this.setState({
                isFinished: false
            });
            setTimeout(this.stopFadeIN, 550);
            timer = setInterval(function() {
                if(opacity > 1){
                    clearInterval(timer);
                }
                elem.style.opacity = opacity;
                opacity += 0.1;
            }, 50);
        }
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"> 
                        <li className="nav-item active">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="homeLink" href="Home" onClick={this.onLinkClick.bind(this)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="aboutLink" href="About" onClick={this.onLinkClick.bind(this)}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="projectLink" href="Projects" onClick={this.onLinkClick.bind(this)}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="contactLink" href="Contact" onClick={this.onLinkClick.bind(this)}>Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div id="content" className="content">
                    { this.state.show === "home" &&
                        <Home functionParent={this.onContactMeClick}/>
                    }
                    { this.state.show === "about" &&
                        <About />
                    }
                    { this.state.show === "project" &&
                        <Projects />
                    }
                    { this.state.show === "contact" &&
                        <Contact functionParent={this.fadeInComponent} />
                    }
                </div>

            </div>
        );
    };
}

export default App;
