import React, {Component} from 'react';
import fire from '../Config/Fire';
import Home from './Home';
import LogReg from './LogReg';

class Registration extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Home />) : (<LogReg />)}
        </div>
    );
  }
}

export default Registration;