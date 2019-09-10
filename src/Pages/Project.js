import React from 'react';
import './Project.css'

const Project = ({ image, alt, title, lien, text, techno }) => {

    return (
        <div className="project">
            <div className="card">
                <img src={image}className="card-img-top img-fluid" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <ul>
                    { techno.map(tec => (
                        <li key={techno.indexOf(tec)}>{tec}</li>
                    ))}
                    </ul>
                    <a rel="noopener noreferrer" href={lien} className="btn btn-primary" target="_blank">Github</a>
                </div>
            </div>
        </div>
    );
};

export default Project;