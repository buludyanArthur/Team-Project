import React, { Component } from 'react';
import fire from '../Config/Fire';

class Home extends Component{

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;