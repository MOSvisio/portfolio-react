import React from 'react';
import './Home.css'

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
            <div className="home-content">
                <h1>SCHUTZ Lucas</h1>
                <h3 id="title">{this.state.currentText}</h3>
                <button onClick={this.props.functionParent}>CONTACT ME</button>
            </div>
        );
    };

};

export default Home;