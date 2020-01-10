import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring'
import './Project.css'

const Project = ({ image, alt, title, lien, text, techno }) => {

    const [flipped, set] = useState(false)
    const [size, setSize] = useState(window.innerWidth)

    const { opacity } = useSpring({
        opacity: (flipped) ? 1 : 0,
        config: {mass : 5, tension: 500, friction: 80 }
    })   

    function resetSize() {
        setSize(window.innerWidth)
    }

    window.addEventListener("resize", resetSize)
    

    return (
        <div className="rootCard">
            <div className="cardSpring" onClick={() => set(state => !state)} onMouseEnter={() => set(state => !state)} onMouseLeave={() => set(state =>!state)}>
                <a.div className="c front" style={{backgroundImage: 'url(' + image + ')'}}>
                    
                </a.div>
                <a.div className="c back" style={size >= 767 ? {opacity} : {opacity: 1}}>
                    <h3>{title}</h3>
                    <p>{text} <br />
                    <b>Langage : </b>{techno}</p>
                    <div className="btn-github-container">
                        { lien &&
                            <a rel="noopener noreferrer" href={lien} className="btn-github" target="_blank">Github</a>
                        }
                    </div>
                </a.div>
           </div>
        </div>
    );
};

export default Project;