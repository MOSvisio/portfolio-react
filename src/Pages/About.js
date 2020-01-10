import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },

    });


    return (
        <animated.div style={props} className="about-content">
            <h1>About me</h1>
            <div className="icon">
                <a href="https://www.linkedin.com/in/lucas-schutz-208883143/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a href="https://github.com/MOSvisio" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </div>
            <p> 
                Praesent interdum ullamcorper mauris in hendrerit. Mauris dapibus nisi et augue luctus, at convallis arcu facilisis. Donec sem tellus, tincidunt id ipsum sit amet, consequat semper risus. Donec eu tincidunt eros. Nunc sollicitudin augue sit amet mi ultricies mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer dui arcu, finibus vel lacus ut, tristique viverra nulla. Donec a massa imperdiet, porta quam a, semper orci. Mauris tempor in dolor sed auctor. Ut tincidunt, urna sed sollicitudin finibus, diam turpis aliquet mauris, vel tincidunt massa ex et lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac velit ante. Integer nec eros rutrum ipsum tempus sollicitudin et id odio. 
            </p>
            <div>
            <hr />
                <div className="language-section">
                    <h3>Language used</h3>                
                    <table>
                        
                        <tbody>
                            <tr>
                                <td title="HTML5" className="iconSkill" style={{borderBottom: "orange solid 4px"}}><FontAwesomeIcon icon={['fab', 'html5']} /></td>
                                <td title="CSS3" className="iconSkill" style={{borderBottom: "lightblue solid 4px"}}><FontAwesomeIcon icon={['fab', 'css3-alt']} /></td>
                                <td title="React" className="iconSkill" style={{borderBottom: "blue solid 4px"}}><FontAwesomeIcon icon={['fab', 'react']} /></td>
                                <td title="C++" style={{borderBottom: "#0d8a74 solid 4px"}}>C++</td>
                                <td title="Java" className="iconSkill" style={{borderBottom: "#d63333 solid 4px"}}><FontAwesomeIcon icon={['fab', 'java']} /></td>
                                <td title="QML" style={{borderBottom: "lightgreen solid 4px"}}>QML</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="work-section" style={{marginTop: "50px"}}>
                    <h3>Work experience</h3>
                    <section className="job vivoka">
                        <h4>c++ developer / apprenticeship</h4>
                        <h5>September 2019 - today</h5>
                        <ol>
                            <li>C++</li>
                            <li>QML</li>
                            <li>Audio analyse</li>
                        </ol>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id augue sollicitudin, varius massa a, congue est. Pellentesque tempor eget dolor eu porta. Nullam a diam sapien. Aliquam lacus est, egestas vehicula malesuada eu, hendrerit a lacus. Aenean elementum, est at dignissim convallis, nisi tortor auctor mauris, nec scelerisque neque lacus quis quam. Donec eros augue, placerat vitae ex consectetur, fermentum euismod magna. Curabitur consectetur nibh vel metus tincidunt, eget dapibus leo sollicitudin. Nullam molestie, quam at euismod luctus, ligula tellus elementum sapien, non congue erat ligula non quam.

                            Proin turpis augue, convallis et dui eu, mattis pretium orci. Praesent efficitur, leo eget accumsan tempor, mauris arcu imperdiet ipsum, in convallis felis metus porta dui. Suspendisse laoreet laoreet nulla, a aliquet velit pharetra vitae. Nam finibus a quam a commodo. Pellentesque in elit rutrum, sollicitudin velit non, placerat turpis. Donec eu sodales lectus. Maecenas maximus dignissim ornare. Nam mollis neque vel neque volutpat facilisis. Phasellus convallis risus ac congue tincidunt. Ut luctus, libero sit amet mollis molestie, metus lacus mollis tellus, sit amet posuere nunc quam a neque. Etiam porta blandit odio, eu consequat urna porta non. 
                        </p>
                        <h5>Company: <a rel="noopener noreferrer" href="http://vivoka.com" target="_blank">Vivoka</a></h5>
                    </section>
                    <hr style={{opacity: '0'}} />
                    <section className="job vivoka">
                        <h4>c++ developer / internship</h4>
                        <h5>September 2019 - today</h5>
                        <ol>
                            <li>C++</li>
                            <li>Websocket</li>
                            <li>Qt</li>
                        </ol>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id augue sollicitudin, varius massa a, congue est. Pellentesque tempor eget dolor eu porta. Nullam a diam sapien. Aliquam lacus est, egestas vehicula malesuada eu, hendrerit a lacus. Aenean elementum, est at dignissim convallis, nisi tortor auctor mauris, nec scelerisque neque lacus quis quam. Donec eros augue, placerat vitae ex consectetur, fermentum euismod magna. Curabitur consectetur nibh vel metus tincidunt, eget dapibus leo sollicitudin. Nullam molestie, quam at euismod luctus, ligula tellus elementum sapien, non congue erat ligula non quam.

                            Proin turpis augue, convallis et dui eu, mattis pretium orci. Praesent efficitur, leo eget accumsan tempor, mauris arcu imperdiet ipsum, in convallis felis metus porta dui. Suspendisse laoreet laoreet nulla, a aliquet velit pharetra vitae. Nam finibus a quam a commodo. Pellentesque in elit rutrum, sollicitudin velit non, placerat turpis. Donec eu sodales lectus. Maecenas maximus dignissim ornare. Nam mollis neque vel neque volutpat facilisis. Phasellus convallis risus ac congue tincidunt. Ut luctus, libero sit amet mollis molestie, metus lacus mollis tellus, sit amet posuere nunc quam a neque. Etiam porta blandit odio, eu consequat urna porta non. 
                        </p>
                        <h5>Company: <a rel="noopener noreferrer" href="http://vivoka.com" target="_blank">Vivoka</a></h5>
                    </section>
                    <hr style={{opacity: '0'}} />
                </div>
            </div> 
        </animated.div>
    );

};

export default About; 