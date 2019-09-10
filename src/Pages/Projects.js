import React from 'react';
import Project from './Project';
import './Projects.css';
import sudoku from './img/sudoku.png';

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
            </div>
        </div>
    );
};

export default Projects;