import React from 'react';
import { useSpring, animated } from 'react-spring';
import Project from './Project';
import './Projects.css';
import sudoku from './img/sudoku.png';
import portfolio from './img/portfolio-react.png';
import banque from './img/banque_de_moselle.png';
import othello from './img/othello.png';

const Projects = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })

    return (
        <animated.div style={props} className="allProject">
            <h1>Projects</h1>
            <div className="projects">
                <Project image={sudoku} 
                    text="Creation of a sudoku game, with a basic AI which can resolse basic sudoku grid" 
                    alt="Sudoku application" 
                    title="Sudoku resolver" 
                    lien="https://github.com/MOSvisio/sudoku_resolver" 
                    techno={["C++", "Qt", "SQLite"]} 
                />
                
                <Project image={portfolio} 
                    text="Creation of this portfolio in order to learn React" 
                    alt="portfolio" 
                    title="Portfolio React" 
                    lien="https://github.com/MOSvisio/portfolio-react" 
                    techno={["HTML","CSS","React JS"]} 
                />

                <Project image={banque} 
                    text="Creation of a server for a student project, the goal was to create a simple application which allow user to order something" 
                    alt="Banque application" 
                    title="Banque de moselle" 
                    lien="https://github.com/MOSvisio/Projet_banque_AS_2019" 
                    techno={["Java", "Spring", "Hibernate"]} 
                />

                <Project image={othello}
                    text="Creation of an Othello game for a student project. The user can play with another player or against an AI" 
                    alt="Othello application" 
                    title="Othello game" 
                    lien="https://github.com/MOSvisio/Divers/tree/PY_othello" 
                    techno={["Python"]} 
                />
            </div>
        </animated.div>
    );
};

export default Projects;