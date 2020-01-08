import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring'
import './Project.css'

const Project = ({ image, alt, title, lien, text, techno }) => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: {mass : 5, tension: 500, friction: 80 }
    })    

    return (
        <div className="rootCard">
            <div className="cardSpring" onMouseEnter={() => set(state => !state)} onMouseLeave={() => set(state =>!state)}>
                <a.div class="c front" style={{opacity: opacity.interpolate(o => 1 - o), transform, backgroundImage: 'url(' + image + ')'}}></a.div>
                <a.div class="c back" style={{opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
                    <p>{text}</p>
                    <button>Github</button>
                </a.div>
           </div>
        </div>
    );
};

export default Project;