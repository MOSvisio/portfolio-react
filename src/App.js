import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

library.add(fab, fas)

class App extends Component {
    constructor() {
        super(); 
        this.state = {
        }
    };
    

    render() {
        return (
            <Router>
            <div>
                <div className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                    <FontAwesomeIcon icon={['fas', 'bars']} />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"> 
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="homeLink">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="aboutLink">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="projectLink">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" id="contactLink">Contact</Link>
                        </li>
                    </ul>
                </div>
                </div>
                <div id="content" className="content">
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
            </Router>
        );
    };
}

export default App;
