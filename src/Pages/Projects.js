import React from 'react';
import Project from './Project';
import './Projects.css';
import sudoku from './img/sudoku.png';
import portfolio from './img/portfolio-react.png'

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

                <Project image={sudoku} 
                    text="Creation of an application who can resolve basic Sudoku grid" 
                    alt="Sudoku application" 
                    title="Sudoku resolver" 
                    lien="https://github.com/MOSvisio/sudoku_resolver" 
                    techno={["C++", "Qt", "SQLite"]} 
                />

                <Project 
                    text="Creation of an application who can resolve basic Sudoku grid" 
                    alt="Sudoku application" 
                    title="Sudoku resolver" 
                    lien="https://github.com/MOSvisio/sudoku_resolver" 
                    techno={["C++", "Qt"]} 
                />
            </div>
        </div>
    );
};

export default Projects;