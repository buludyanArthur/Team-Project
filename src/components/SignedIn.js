import React, { useEffect, useContext } from 'react';
import fire from '../config/Fire';
import { UserContext } from '../components/UserContext';

import { TranslationContext } from '../translations/translations';


function SignedIn (){
    const {translate} = useContext(TranslationContext);
    const userContext = useContext(UserContext);

    function logout() {
        fire.auth().signOut();
    }

    return (
        <div>
            {
                userContext && (<small key={userContext.uid} className='userName'>{userContext.firstName} {userContext.lastName}</small>)
            }
            <br/>
            <button className="logout" onClick={logout}>{translate('logout')}</button>
        </div>
    )
}

export default SignedIn;