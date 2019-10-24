import React, {Component} from "react";
​
class Contact extends Component {
      
render () {
  return (
      <div>
        <div  style={{position: 'absolute', width:'100%',height:'100vh', textAlign: 'center',
    backgroundColor: 'rgba(51,51,51,0.9)', zIndex:'20'}}>
	<div className="row">
  <div className="col-md-3">
    <div className="contact-info">
      <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
      <h2>Contact with us</h2>
      <h4>Your opinion is important for us, and we will answer your questions as soon as possible </h4>
    </div>
  </div>
  <div className="col-md-9">
  {/* <span className='contact-closer' onClick={()=>this.ContactClose()} >X</span> */}
    <div className="contact-form">
      <div className="form-group">
        <label className="control-label col-sm-2" for="fname">Name:</label>
        <div className="col-sm-10">          
        <input type="text" className="form-control" id="fname" placeholder="Your name" name="fname"></input>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" for="lname">Surname:</label>
        <div class="col-sm-10">          
        <input type="text" className="form-control" id="lname" placeholder="Surname" name="lname"></input>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" for="email">Email:</label>
        <div className="col-sm-10">
        <input type="email" className="form-control" id="email" placeholder="E-mail adress" name="email"></input>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" for="comment">Massage:</label>
        <div className="col-sm-10">
        <textarea className="form-control" rows="5" id="comment" placeholder="Comment"></textarea>
        </div>
      </div>
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  );
};
}
​
export default Contact;