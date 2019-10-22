import React, { Component } from "react";
import fire from '../Config/Fire';
import '../Styles/LogReg.css';

class LogReg extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        };
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register', loginBtn: false, fireErrors: ''})
        }
        else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''})
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    signIn = e => {
        document.querySelector('.formBlock').style.display = 'flex';
    }

    close = e => {
        document.querySelector('.formBlock').style.display = 'none';
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" onClick={this.login} value="Enter" />) : 
            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

        let loginRegister = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)


        return (
            <div className='wrapper'>
                <button id='signIn' onClick={this.signIn}>Sign In</button>
                <div className='formBlock'>
                    <div className='formContent'>
                        <div class='close' onClick={this.close}>+</div>
                        <div id='title'>{this.state.formTitle}</div>
                        <div className='body'>
                            {errorNotification}
                            <form>
                                <div>Email</div>
                                <input 
                                type='text'
                                value={this.state.email}
                                onChange={this.handleChange}
                                name='email' />
                                <div>Password</div>
                                <input 
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChange}
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
}

export default LogReg;