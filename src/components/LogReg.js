import React, { useState, useContext } from "react";
import fire from '../config/Fire';
import Loading from './loading'
import '../styles/LogReg.css';
import { TranslationContext } from '../translations/translations';


function LogReg () {
    const {translate} = useContext(TranslationContext);

    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[address, setAddress]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[fireErrors, setFireErrors]=useState('')
    const[formTitle, setFormTitle]=useState(translate('login'))
    const[loginBtn, setLoginBtn]=useState(true)

    const regName = RegExp(/^[A-Z][a-z]{1,}$/);
    const regEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    function login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                setFireErrors(error.message)
            });
    }

    function register(e) {
        e.preventDefault();

        if(regName.test(firstName)){
            if(regName.test(lastName)){
                if(address.length >= 3){
                    fire.auth().createUserWithEmailAndPassword(email, password)
                        .catch((error) => {
                        setFireErrors(error.message)
                        });
                    if(regEmail.test(email) && password.length >= 6){
                        fire.firestore().collection('users').doc(`${email}`).set({
                            firstName: firstName,
                            lastName: lastName,
                            address: address
                        });
                    }
                }
                else{
                    setFireErrors('Badly formatted address')
                }
            }
            else{
                setFireErrors('Badly formatted last name')
            }
        }
        else{
            setFireErrors('Badly formatted first name')
        }
    }

    function getAction (action) {
        if(action === 'reg'){
            setFormTitle(translate('register'));
            setLoginBtn(false);
            setFireErrors('');
            setEmail('');
            setPassword('');
            document.querySelector('.formContent').style.height = '550px';
        }
        else{
            setFormTitle(translate('login'));
            setLoginBtn(true);
            setFireErrors('');
            setEmail('');
            setPassword('');
            document.querySelector('.formContent').style.height = '370px';
        }
    }

    function signIn () {
        setFireErrors('');
        document.querySelector('.formBlock').style.display = 'flex';
    }

    function close () {
        setFireErrors('');
        document.querySelector('.formBlock').style.display = 'none';
    }

    let errorNotification = fireErrors ? 
    ( <div className='Error'> {fireErrors} </div> ) : null;

    let submitBtn = loginBtn ? 
        (<input className = "reg" type='submit' onClick={login} value={translate('login')} />) : 
        (<input  className = "reg"type='submit' onClick={register} value={translate('register')} />);

    let loginRegister = loginBtn ?
        (<button className="reg" onClick={() => getAction('reg')}>{translate('register')}</button>) : 
        (<button className='reg' onClick={() => getAction('login')}>{translate('login')}</button>)

    return (
        <div className='wrapper'>
            <button id = "button" onClick={signIn}>{translate('signIn')}</button>
            <div className='formBlock'>
                <div className='formContent'>
                    <div className='close' onClick={close}>+</div>
                    <div id='title'>{formTitle}</div>
                    <div>
                        <small className='errorNotification'>
                            {errorNotification ? errorNotification : <br />}
                        </small>
                        <form className = "registration">
                            {loginBtn ? '' : (
                                <div>
                                    <input className='registerBtn' placeholder={translate('firstName')}
                                    type='text' 
                                    name='firstName' 
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                        />
                                    <input className='registerBtn' placeholder={translate('lastName')}
                                    type='text' 
                                    name='lastName' 
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                        />
                                    <input className='registerBtn' placeholder='Address'
                                    type='text' 
                                    name='address' 
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                        />
                                </div> 
                            )
                            }
                            <input className='registerBtn' placeholder={translate('email')}  
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name='email' />
                            <input className='registerBtn' placeholder={translate('password')} 
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            name='password' />
                            <br />
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
