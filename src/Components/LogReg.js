import React, { useState, UseEffect } from "react";
import fire from '../Config/Fire';
import '../styles/LogReg.css';

function LogReg () {

    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[fireErrors, setFireErrors]=useState('')
    const[formTitle, setFormTitle]=useState('Login')
    const[loginBtn, setLoginBtn]=useState(true)

    function login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                setFireErrors(error.message)
            });
    }

    function register(e) {
        e.preventDefault();

        fire.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                setFireErrors(error.message)
            });

        if(firstName !== '' && lastName !== ''){
            fire.firestore().collection('users').doc(`${email}`).set({
                firstName: firstName,
                lastName: lastName
        });
        }
    }

    function getAction (action) {
        if(action === 'reg'){
            setFormTitle('Register');
            setLoginBtn(false);
            setFireErrors('');
            setEmail('');
            setPassword('');
        }
        else{
            setFormTitle('Login');
            setLoginBtn(true);
            setFireErrors('');
            setEmail('');
            setPassword('');
        }
    }

    function signIn () {
        document.querySelector('.formBlock').style.display = 'flex';
    }

    function close () {
        document.querySelector('.formBlock').style.display = 'none';
    }

    let errorNotification = fireErrors ? 
    ( <div className='Error'> {fireErrors} </div> ) : null;

    let submitBtn = loginBtn ? 
        (<input className='loginBtn' type='submit' onClick={login} value='Enter' />) : 
        (<input className='loginBtn' type='submit' onClick={register} value='Register' />);

    let loginRegister = loginBtn ?
        (<button className='registerBtn' onClick={() => getAction('reg')}>Register</button>) : 
        (<button className='registerBtn' onClick={() => getAction('login')}>Login</button>)

    return (
        <div className='wrapper'>
            <button id='signIn' onClick={signIn}>Sign In</button>
            <div className='formBlock'>
                <div className='formContent'>
                    <div className='close' onClick={close}>+</div>
                    <div id='title'>{formTitle}</div>
                    <div className='body'>
                        {errorNotification}
                        <form>
                            {loginBtn ? '' : (
                                <div>
                                    <div>First Name</div>
                                    <input className='registerBtn' 
                                    type='text' 
                                    name='firstName' 
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                        />
                                    <div>Last Name</div>
                                    <input className='registerBtn' 
                                    type='text' 
                                    name='lastName' 
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                        />
                                </div> 
                            )
                            }
                            <div>Email</div>
                            <input 
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name='email' />
                            <div>Password</div>
                            <input 
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            name='password' />
                            <br />
                            {submitBtn}
                        </form>
                        {loginRegister}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogReg;