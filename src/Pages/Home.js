import React from 'react';
import { Link } from "react-router-dom";
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Home.css';

const speed = 50

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            j: 0,
            txt: '<Web - Software developer />',
            currentText: ''
        }

    }
    
    componentDidMount = () => {
        this.typeWriter();
    }

    componentWillUnmount = () =>  {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }

    }

    typeWriter = () => {
        if (this.state.i < this.state.txt.length) {
            this.setState({
                currentText: this.state.currentText + this.state.txt[this.state.i],
                i: this.state.i+1
            });
            this.timerHandle = setTimeout(this.typeWriter, speed);
        }
    };

    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <div className="home-content" style={props}>
                        <h1>SCHUTZ Lucas</h1>
                        <h3 id="title">{this.state.currentText}</h3>
                        <div className="container-button">
                            <Link className="button btn-about" to="/about">About me</Link>
                        </div>
                        <div className="container-social">
                            <a rel="noopener noreferrer" href="https://www.instagram.com/lucasschutz57/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a rel="noopener noreferrer" href="https://twitter.com/schtz_lucas" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a rel="noopener noreferrer" href="https://twitch.tv/mosvisio/" target="_blank"><FontAwesomeIcon icon={['fab', 'twitch']} /></a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-schutz-208883143/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        </div>
                </div>}
            </Spring>
        ); 
    };

};

export default Home;