import React from 'react';
import './Home.css'

const speed = 50

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            j: 0,
            txt: 'Web / Software developer',
            currentText: '',
            bar: '|'
        }

    }
    
    componentDidMount = () => {

        this.typeWriter();
        this.flashBar();

    }

    componentWillUnmount = () =>  {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }

        if (this.timerHandle2) {
            clearTimeout(this.timerHandle2);
            this.timerHandle2 = 0;
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

    flashBar = () => {
        if (this.state.bar === "|")
            this.setState({
                bar: " "
            })
        else if (this.state.bar === " ")
        this.setState({
            bar: "|"
        })
        this.timerHandle2 = setTimeout(this.flashBar, speed + 500);
    }

    render() {
        return (
            <div className="home-content">
                <h1>SCHUTZ Lucas</h1>
                <h3 id="title">{this.state.currentText} {this.state.bar}</h3>
                <button onClick={this.props.functionParent}>CONTACT ME</button>
            </div>
        );
    };

};

export default Home;