import React, {useState} from 'react';
import './Contact.css'

const Contact = () => {

    const [mail, setMail] = useState('');
    const [text, setText] = useState('');

    const onChangeEmail = (event) => {
        event.preventDefault();
        setMail(event.target.value);
    }

    const onChangeText = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }

    const onClickSend = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://mosvisiobackportfolio.herokuapp.com/mail?sender=${mail}&text=${text}&callback=?`);
        const responseData = await response.json();
        console.log(responseData);
    }

    return (
        <div className="contact-content">
            <h1>Contact</h1>
            <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="mail" onChange={onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea2">Enter your message</label>
                <textarea onChange={onChangeText} name="text" className="textarea form-control rounded-0" id="exampleFormControlTextarea2" rows="10"></textarea>
            </div>
            <button onClick={onClickSend} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;