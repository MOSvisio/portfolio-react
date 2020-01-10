import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import ReCAPTCHA from 'react-google-recaptcha'
import './Contact.css'

const Contact = ({functionParent}) => {

    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [mailValid, setMailValid] = useState(true);
    const [screen, setScreen] = useState(true);
    const [load, setLoad] = useState(false);
    const recaptchaRef = React.createRef();
    var captchaValue = "";

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
            resetForm();
            console.log(responseData);
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
        captchaValue = recaptchaRef.current.getValue();
        isFormValid(mail, text);
    }

    return (
        <div className="contact-content">
            { screen ? (
                
                <animated.form style={props} div="form-mail" onSubmit={onClickSend}>
                    <h1>Contact</h1>
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
        </div >
    );
}

export default Contact;