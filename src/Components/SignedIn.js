import React, { useState, useEffect } from 'react';
import fire from '../Config/Fire';

function SignedIn (){
    const[user, setUser]=useState(null)


    function logout() {
        fire.auth().signOut();
    }

    useEffect( () => {
        if(fire.auth.currentUser){
            fire.firestore().collection('users')
            .doc(`${fire.auth().currentUser.email}`)
            .get()
            .then( snapshot => {
                    const user = [];
                    user.push(snapshot.data().firstName, snapshot.data().lastName)
                    setUser(user)
                }
            )
    }}
    )

    return (
        <div>
            {
                user &&
                user.map( user => {
                    return (
                        <small>
                            {user}<br/>
                        </small>
                    )
                })
            }
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default SignedIn;