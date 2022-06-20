import "./Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const [msgError, setMsgError] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(document.getElementById('floatingInput').value !== ''){
    emailjs.sendForm('service_mcf6m9p', 'template_25ft3qu', form.current, 'Y0Dr6VLHf0zk2pCs4')
      .then((result) => {
          alert("We Call You ❤")
      }, (error) => {
          setMsgError(false)
      })
      e.target.reset();
  }else{
    setMsgError(false)
  }
}
  const changeState = () => {
    setMsgError(true)
  }
 if(msgError){
  return (
    <div className="container fx-m text-center py-4 animo">
      <h2 className="display-6 fon-fa">Contact Us by Send message</h2>
              
    <form ref={form} onSubmit={sendEmail} className="col-lg-6 col-12 py-3">
       <div className="form-floating mb-1">
          <input type="text" name="user_name" id="floatingInput" className="form-control" />
          <label forHtml="floatingInput">Name</label>
       </div>
       <div className="form-floating mb-1">
           <input type="email" name="user_email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com"  />
           <label forHtml="floatingInputInvalid">Email</label>
        </div>
       <div className="form-floating">
         <textarea rows="10" name="message" className="form-control" style={{height: "120px"}}/>
         <label>Message</label>
       </div>
      <input type="submit" className="btn btn-primary btn-lg mt-3 w-100" value="Send" />
    </form>
    </div>
  )
  }else{
    return(
      <div className="container bg-danger py-5 text-white">
        <div className="col-12">
        <h1 className="display-3">Please Chek your Connection !</h1>
        <button 
        onClick={changeState}
        className="btn btn-primary mt-4">Try again</button>
      </div>
      </div>
    )
  }
}


export default Contact;