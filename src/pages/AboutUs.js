import React,{useContext} from 'react';

import { TranslationContext } from '../translations/translations';

export default function AboutUs () {
    const {translate} = useContext(TranslationContext);
    return (
        <div style={{margin: "3rem"}}>            
            <h2 style={{textAlign:"center"}}>{translate('aboutStoreTitle')}</h2>


<h4>{translate('aboutStore')} </h4>

        </div>
    )
}
 