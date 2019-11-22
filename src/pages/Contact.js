import React, {useContext} from "react";
import  '../styles/ContactStyle.css'

import { TranslationContext } from '../translations/translations';
import { UserContext } from "../components/UserContext";


export default function Contact () {
  const {translate} = useContext(TranslationContext);
  const userContext = useContext(UserContext)

  return (
     <form id="contactform" action="//formspree.io/merihak2000@gmail.com" method="POST">
      <fieldset id="fs-frm-inputs">
	<div className="row">
  <div className="col-md-3">
    <div className="contact-info">
      <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
      <h2>{translate('contactWithUs')}</h2>
      <h4>{translate('contactMe')} </h4>
    </div>
  </div>
  <div className="col-md-9">
  {/* <span className='contact-closer' onClick={()=>this.ContactClose()} >X</span> */}
    <div className="contact-form">
      <div className="form-group">
        {/* <label className="control-label col-sm-2" for="fname">{translate('firstName')}:</label> */}
        <div className="col-sm-10">          
        <input type="text" className="form-control" value={userContext ? userContext.email !== 'admin@gmail.com' ? userContext.firstName : '' : null} id="fname" placeholder={translate('firstName')} name="fname" required></input>
        </div>
      </div>
      <div className="form-group">
        {/* <label className="control-label col-sm-2" for="lname">{translate('lastName')}:</label> */}
        <div className="col-sm-10">          
        <input type="text" className="form-control" id="lname" value={userContext ? userContext.email !== 'admin@gmail.com' ? userContext.lastName : '' : null} placeholder={translate('lastName')} name="lname" required></input>
        </div>
      </div>
      <div className="form-group">
        {/* <label className="control-label col-sm-2" for="email">{translate('email')}:</label> */}
        <div className="col-sm-10">
        <input type="email" className="form-control" value={userContext ? userContext.email !== 'admin@gmail.com' ? userContext.email : '' : null} id="email" placeholder={translate('email')} name="email" required></input>
        </div>
      </div>
      <div className="form-group">
        {/* <label className="control-label col-sm-2" for="comment">{translate('massage')}:</label> */}
        <div className="col-sm-10">
        <textarea className="form-control" rows="5" id="comment" value={userContext ? userContext.email === 'admin@gmail.com' ? '' : null : null} placeholder={translate('massage')} required></textarea>
        </div>
      </div>
      
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
        <button  className="contact"type="submit">{translate('send')}</button>
        </div>
      </div>
    </div>
  </div>

</div>
</fieldset>
</form>
  );
};


