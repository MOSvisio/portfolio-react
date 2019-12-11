import React from 'react';
import { Link } from "react-router-dom";
import { Spring } from 'react-spring/renderprops';
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
                        <Link to="/contact">
                            <a class="btn btn-primary" href="/contact" role="button">Contact Me</a>
                        </Link>
                </div>}
            </Spring>
        );
    };

};

export default Home;