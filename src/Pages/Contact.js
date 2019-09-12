import React, {useState} from 'react';
import './Contact.css'

const Contact = ({functionParent}) => {

    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [mailValid, setMailValid] = useState(true);
    const [screen, setScreen] = useState(true);
    const [load, setLoad] = useState(false);

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
        if (mailT.trim() !== '' && textT.trim() !== '')
        {
            if (mailT.trim().match(mailRegExp) !== null)
                document.getElementById("send-btn").disabled = false;
        }
        else 
            document.getElementById("send-btn").disabled = true;
    }

    const onClickSend = async (event) => {
        event.preventDefault();
        if (mail !== '' && text !== '')
        {
            setLoad(true);
            document.getElementById("send-btn").disabled = true;
            const response = await fetch(`https://mosvisiobackportfolio.herokuapp.com/mail/send?sender=${mail}&text=${text}&callback=?`);
            const responseData = await response.json();
            resetForm();
            console.log(responseData);
            functionParent();
            setScreen(false);
        }
    }

    function resetForm() {
        setMail('');
        setText('');
    }

    return (
        <div className="contact-content">
            { screen ? (
                
                <form div="form-mail" onSubmit={onClickSend}>
                    <h1>Contact</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="mail" onChange={onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        { !mailValid &&
                            <small id="emailHelp" className="form-text">This mail address is not valid.</small>
                        }
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea2">Enter your message</label>
                        <textarea onChange={onChangeText} name="text" className="textarea form-control rounded-0" id="exampleFormControlTextarea2" rows="10"></textarea>
                    </div>
                        { !load ? (
                            <button id="send-btn" className="btn btn-primary" disabled>Send Mail</button>
                        ) : (
                            <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        )}
                </form>
            ) : (   
                <h1>Thank You !</h1>
            )
            }
        </div>
    );
}

export default Contact;