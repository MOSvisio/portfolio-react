import React from 'react';
import Project from './Project';
import './Projects.css';
import sudoku from './img/sudoku.png';
import portfolio from './img/portfolio-react.png'
import banque from './img/banque_de_moselle.png'

const Projects = () => {

    return (
        <div className="allProject">
            <h1>Projects</h1>
            <div className="projects">
                <Project image={sudoku} 
                    text="Creation of an application who can resolve basic Sudoku grid" 
                    alt="Sudoku application" 
                    title="Sudoku resolver" 
                    lien="https://github.com/MOSvisio/sudoku_resolver" 
                    techno={["C++", "Qt", "SQLite"]} 
                />
                
                <Project image={portfolio} 
                    text="Creation of this portfolio to learn react" 
                    alt="portfolio" 
                    title="Portfolio React" 
                    lien="https://github.com/MOSvisio/portfolio-react" 
                    techno={["HTML","CSS","React JS"]} 
                />

                <Project image={banque} 
                    text="Student Project. Creation of the server for an order management application for a fictional bank" 
                    alt="Banque application" 
                    title="Banque de moselle" 
                    lien="https://github.com/MOSvisio/Projet_banque_AS_2019" 
                    techno={["Java", "Spring", "Hibernate"]} 
                />

                <Project 
                    text="Creation of an Othello game for a student project" 
                    alt="Othello application" 
                    title="Othello game" 
                    lien="https://github.com/MOSvisio/Divers/tree/PY_othello" 
                    techno={["Python"]} 
                />
            </div>
        </div>
    );
};

export default Projects;