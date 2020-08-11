import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import ReCAPTCHA from 'react-google-recaptcha'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({functionParent}) => {

    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [mailValid, setMailValid] = useState(true);
    const [screen, setScreen] = useState(true);
    const [load, setLoad] = useState(false);
    const recaptchaRef = React.createRef();
    const [captchaValue, setCaptcha] = useState("")

    const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onChangeEmail = (event) => {
        event.preventDefault();
        var value = event.target.value;
        setMail(value);
        if (value.match(mailRegExp) === null)
            setMailValid(false);
        else
            setMailValid(true);
        isFormValid(value, text);
    }

    const onChangeText = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setText(value);
        isFormValid(mail, value);
    }

    function isFormValid(mailT, textT) {
        if (mailT.trim() !== '' && textT.trim() !== '' && captchaValue !== "")
        {
            if (mailT.trim().match(mailRegExp) !== null)
                document.getElementById("send-btn").disabled = false;
        }
        else 
            document.getElementById("send-btn").disabled = true;
    }

    const onClickSend = async (event) => {
        event.preventDefault();
        if (mail !== '' && text !== '' && captchaValue !== "")
        {
            setLoad(true);
            document.getElementById("send-btn").disabled = true;
            const response = await fetch(`https://mosvisiobackportfolio.herokuapp.com/mail/send?sender=${mail}&text=${text}&captcha=${captchaValue}&callback=?`);
            const responseData = await response.json();
            console.log(responseData)
            resetForm();
            fadeInComponent();
            setScreen(false);
        }
    }

    function resetForm() {
        setMail('');
        setText('');
    }

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {duration: 500}
      })

    const fadeInComponent = () => {
        var elem = document.getElementById("content");
        elem.style.opacity = 0;
        var opacity = 0;
        var timer = null
        timer = setInterval(function() {
            if(opacity > 1){
                clearInterval(timer);
            }
            elem.style.opacity = opacity;
            opacity += 0.1;
        }, 50);

    }

    function onCaptchaChange(value) {
        setCaptcha(recaptchaRef.current.getValue());
        isFormValid(mail, text);
    }

    return (
        <div className="contact-content">
            <h1>Contact</h1>
            <div className="contact-body">
                { screen ? (
                    <animated.form style={props} div="form-mail" onSubmit={onClickSend}>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="mail" onChange={onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
                            { !mailValid &&
                                <small id="emailHelp" className="form-text">This mail address is not valid.</small>
                            }
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea2">Enter your message</label>
                            <textarea onChange={onChangeText} name="text" className="textarea form-control rounded-0" id="exampleFormControlTextarea2" rows="10" placeholder="Enter your message here"></textarea>
                        </div>
                        <div className="form-group">
                            <div id="captcha-container">
                                <ReCAPTCHA className="captchaArea"
                                    sitekey="6Ldu_MsUAAAAALNCk9UCvmzcdR6u4Qq7A8eL9iA5" 
                                    onChange={onCaptchaChange} 
                                    ref={recaptchaRef}    
                                />
                            </div>
                        </div>
                            { !load ? (
                                <button id="send-btn" className="" disabled>Send Mail</button>
                            ) : (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                    </animated.form>
                ) : (   
                    <animated.h1 style={props}>Thank You !</animated.h1>
                )
                }
                <div className="info">
                    <h3>Infos</h3>
                    
                    <h5 style={{marginTop: "25px"}}><strong>Mail : </strong>lucas.schutz0954@gmail.com</h5>
                    <hr />
                    <h5><strong>Phone number : </strong>+33 647978132</h5>
                    <hr />
                    <div className="container-social">
                        <a rel="noopener noreferrer" href="https://www.instagram.com/lucasschutz57/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        <a rel="noopener noreferrer" href="https://twitter.com/Fas_Mosvisio" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a rel="noopener noreferrer" href="https://twitch.tv/mosvisio/" target="_blank"><FontAwesomeIcon icon={['fab', 'twitch']} /></a>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-schutz-208883143/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    </div>
                    <hr />
                    <h5>7 rue de haute rive</h5>
                    <h5>57070 Metz</h5>
                    <hr />
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.4342982309518!2d6.187390215820539!3d49.09738939180244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794ddffe56ff36b%3A0x5c99bbff97c11fc5!2s7%20Rue%20de%20Haute-Rive%2C%2057070%20Metz!5e0!3m2!1sfr!2sfr!4v1597048411752!5m2!1sfr!2sfr" width="400" height="200" frameborder="0" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </div>
            </div>
        </div >
    );
}

export default Contact;