import '../static/css/LoginModal.css'
import { useState } from 'react';
import OtherOptionDropdown from './OtherOptionDropdown';
import MultySelectDropdown from './MultySelectDropdown';
function LoginModal({ loginFormRef, setIsLogin, setUser }) {

    const [emailErrorText, setEmailErrorText] = useState('');
    const [confirmErrorText, setConfirmErrorText] = useState('');
    const [usernameErrorText, setUsernameErrorText] = useState('');
    const [formData, setFormData] = useState({
        'email': '',
        'confirm': '',
        'username': '',
        'gender': '',
        'hobbyType': '',
        'specifyHobby': ''
    });

    function updateForm(key, val) {
        setFormData({ ...formData, [key]: val });
    };

    function validateEmail(e) {
        if (formData['email'].length === 0) {
            e.target.classList.toggle('error');
            setEmailErrorText('Email field is required');
        } else if (!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData['email']))) {
            e.target.classList.toggle('error');
            setEmailErrorText('Please enter an email in the correct format');
        } else if (formData['confirm'] !== formData['email'] && formData['confirm'].length > 0) {
            setEmailErrorText('Confirm field should match the Email field');
        } else {
            e.target.classList.remove('error');
            setEmailErrorText('');
            return true;
        }
        return false;
    }

    function validateConfirm(e) {
        if (formData['confirm'] === 0) {
            e.target.classList.toggle('error');
            setConfirmErrorText('Confirm field is required');
        } else if (formData['confirm'] !== formData['email']) {
            setConfirmErrorText('Confirm field should match the Email field');
        } else if (!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData['confirm']))) {
            e.target.classList.toggle('error');
            setConfirmErrorText('Please enter an confirm email in the correct format');
        } else {
            e.target.classList.remove('error');
            setConfirmErrorText('');
            return true;
        }
        return false;
    }

    function validateUsername(e) {
        if (formData['username'].length === 0) {
            setUsernameErrorText('Username field is required');                        
            e.target.classList.toggle('error');
        } else if (formData['username'] > 15) {
            e.target.classList.toggle('error');
            setUsernameErrorText('The length of username must less than 16');
        } else {
            e.target.classList.remove('error');
            setUsernameErrorText('');
            return true;
        }
        return false;
    }

    function validateOnBlur(e, type) {
        switch (type) {
            case 'email':
                validateEmail(e);
                break;
            case 'confirm':
                validateConfirm(e);
                break;
            case 'username':
                validateUsername(e);
                break;
            default :
                break;
        }
    }

    function handleSubmit() {
        let isInValid = false;
        if (formData['email'].length === 0) {
            // e.target.classList.toggle('error');
            setEmailErrorText('Email field is required');
            isInValid = true;
        } else if (!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData['email']))) {
            // e.target.classList.toggle('error');
            setEmailErrorText('Please enter an email in the correct format');
            isInValid = true;
        } else if (formData['confirm'] !== formData['email'] && formData['confirm'].length > 0) {
            setEmailErrorText('Confirm field should match the Email field');
            isInValid = true;
        } else {
            // e.target.classList.remove('error');
            setEmailErrorText('');
        }
        if (formData['confirm'] === 0) {
            // e.target.classList.toggle('error');
            setConfirmErrorText('Confirm field is required');
            isInValid = true;
        } else if (formData['confirm'] !== formData['email']) {
            setConfirmErrorText('Confirm field should match the Email field');
            isInValid = true;
        } else if (!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData['confirm']))) {
            // e.target.classList.toggle('error');
            setConfirmErrorText('Please enter an confirm email in the correct format');
            isInValid = true;
        } else {
            // e.target.classList.remove('error');
            setConfirmErrorText('');
        }
        if (formData['username'].length === 0) {
            setUsernameErrorText('Username field is required'); 
            isInValid = true;                       
            // e.target.classList.toggle('error');
        } else if (formData['username'] > 15) {
            // e.target.classList.toggle('error');
            setUsernameErrorText('The length of username must less than 16');
            isInValid = true;
        } else {
            // e.target.classList.remove('error');
            setUsernameErrorText('');
        }
        if(!isInValid){
            loginFormRef.current.close();
            setIsLogin(true);
            setUser(formData);
        } 
    }

    return (
        <dialog className="modal" ref={loginFormRef} aria-label="subscribe form">
            <p className="modal-title">Subscribe to view more information!</p>
            <form className="modal-form">
                <div className="subscribe-email" aria-label="eamil item">
                    <label>
                        <span>Email:</span><span className="modal-text-italic "> * required</span>
                        <input className="subscribe-email-input" onChange={e => updateForm('email', e.target.value)} onBlur={e => validateOnBlur(e, 'email')} name="email" placeholder="sophie@example.com" />
                    </label>
                    <span className="subscribe-email-error">{emailErrorText}</span>
                </div>
                <div className="subscribe-confirm" aria-label="confirm email item">
                    <label>
                        <span>Confirm Email:</span><span className="modal-text-italic "> * required</span>
                        <input className="subscribe-confirm-input" onChange={e => updateForm('confirm', e.target.value)} onBlur={e => validateOnBlur(e, 'confirm')} name="confirm" placeholder="Please reenter your email" />
                    </label>
                    <span className="subscribe-confirm-error">{confirmErrorText}</span>
                </div>
                <div className="subscribe-username" aria-label="Your username">
                    <label>
                        <span>Username:</span><span className="modal-text-italic "> * required</span>
                        <input className="subscribe-username-input" onChange={e => updateForm('username', e.target.value)} onBlur={e => validateOnBlur(e, 'username')} name="username" placeholder="Please enter your username" />
                    </label>
                    <span className="subscribe-username-error">{usernameErrorText}</span>
                </div>
                <OtherOptionDropdown></OtherOptionDropdown>
                <MultySelectDropdown></MultySelectDropdown>
                <div className="subscribe-button">
                    <button className="subscribe-submit" type='button' onClick={() => handleSubmit()} aria-label="submit button">Subscribe</button>
                    <button className="subscribe-close" type="button" onClick={() => loginFormRef.current.close()} aria-label="close button">Close</button>
                </div>
            </form>
        </dialog>
    );
}

export default LoginModal;