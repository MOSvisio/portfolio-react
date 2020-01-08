import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring'
import './Project.css'

const Project = ({ image, alt, title, lien, text, techno }) => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0} deg)`,
        config: {mass : 5, tension: 500, friction: 80 }
    })    

    return (
        <div className="project">
            <div className="card h-100">
                <img src={image}className="card-img-top img-fluid" alt={alt} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mt-auto">
                        {text}
                    </p>
                    <h6>Langages :</h6>
                    <ul>
                        { techno.map(tec => (
                            <li key={techno.indexOf(tec)}>{tec}</li>
                        ))}
                    </ul>
                    <a rel="noopener noreferrer" href={lien} className="btn btn-primary mt-auto" target="_blank">Github</a>
                </div>
            </div>
        </div>
    );
};

export default Project;