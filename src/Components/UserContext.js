import React, { useState, useEffect } from 'react';
import fire from '../Config/Fire';

export const UserContext = React.createContext();
export const UserProvider = ( props ) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fire.auth().onAuthStateChanged((authUser) => {
            if(authUser){
                fire.firestore().collection('users')
                .doc(`${fire.auth().currentUser.email}`)
                .get()
                .then( snapshot => {

                    setUser({
                        ...authUser,
                        ...snapshot.data()
                    });
                    }
                )
            }
            else{
                setUser(null)
            }
        })
    }, []) 
    
    return (
        <UserContext.Provider value={ user } >
            {props.children}
        </UserContext.Provider>
    )
}