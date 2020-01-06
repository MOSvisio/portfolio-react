import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })

    return (
        <animated.div style={props} className="shadow about-content">
            <h1>About me</h1>
            <div className="icon"><a href="https://www.linkedin.com/in/lucas-schutz-208883143/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://github.com/MOSvisio" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a></div>
            <p> 
            Praesent interdum ullamcorper mauris in hendrerit. Mauris dapibus nisi et augue luctus, at convallis arcu facilisis. Donec sem tellus, tincidunt id ipsum sit amet, consequat semper risus. Donec eu tincidunt eros. Nunc sollicitudin augue sit amet mi ultricies mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer dui arcu, finibus vel lacus ut, tristique viverra nulla. Donec a massa imperdiet, porta quam a, semper orci. Mauris tempor in dolor sed auctor. Ut tincidunt, urna sed sollicitudin finibus, diam turpis aliquet mauris, vel tincidunt massa ex et lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac velit ante. Integer nec eros rutrum ipsum tempus sollicitudin et id odio. 
            </p>
            <div>
            
            </div>
        </animated.div>
    );

};

export default About; 