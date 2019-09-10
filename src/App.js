import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'

class App extends Component {
    constructor() {
        super(); 
        this.state = {
            show: "home"
        }
    };

    onLinkClick(event) {
        event.preventDefault();
        const object = event.target.id;
        console.log(event.target.id);
        if (object === "homeLink"){
            this.setState({
                show: "home"
            });
        }
        else if (object === "aboutLink"){
            this.setState({
                show: "about"
            });
        }
        else if (object === "projectLink"){
            this.setState({
                show: "project"
            });
        }
        var elem = document.getElementById("content");
        elem.style.opacity = 0;
        this.fadeInComponent();
    }


    fadeInComponent() {
        var elem = document.getElementById("content");
        elem.style.opacity = 0;
        console.log(elem);
        var opacity = 0;

        var timer = setInterval(function() {
            if(opacity > 1){
                clearInterval(timer);
            }
            elem.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
        
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
                            <a className="nav-link" id="homeLink" href="Home" onClick={this.onLinkClick.bind(this)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="aboutLink" href="About" onClick={this.onLinkClick.bind(this)}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="projectLink" href="Projects" onClick={this.onLinkClick.bind(this)}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contactLink" href="Contact" onClick={this.onLinkClick.bind(this)}>Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div id="content" className="content">
                    { this.state.show === "home" &&
                        <Home />
                    }
                    { this.state.show === "about" &&
                        <About />
                    }
                    { this.state.show === "project" &&
                        <Projects />
                    }
                </div>

            </div>
        );
    };
}

export default App;
