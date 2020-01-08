import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring'
import './Project.css'

const Project = ({ image, alt, title, lien, text, techno }) => {

    const [flipped, set] = useState(false)
    const { opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        config: {mass : 5, tension: 500, friction: 80 }
    })   
    
    

    return (
        <div className="rootCard">
            <div className="cardSpring" onMouseEnter={() => set(state => !state)} onMouseLeave={() => set(state =>!state)}>
                <a.div class="c front" style={{/*opacity: opacity.interpolate(o => 1 - o), */backgroundImage: 'url(' + image + ')'}}>
                    
                </a.div>
                <a.div class="c back" style={{opacity}}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <p><strong>Langage : </strong>{techno}</p>
                    <div >
                        { lien &&
                            <a rel="noopener noreferrer" href={lien} className="btn btn-primary " target="_blank">Github</a>
                        
                        }
                    </div>
                </a.div>
           </div>
        </div>
    );
};

export default Project;