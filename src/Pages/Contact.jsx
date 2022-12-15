import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

    const [nameState, setnameState] = useState("");
    const [emailState, setemailState] = useState("");
    const [messageState, setmessageState] = useState("");
    const [alertState, setalertState] = useState("Successfully sent!");
    const [dialogState, setdialogState] = useState(false);
    const form = useRef();

    function handledialog(text){
        setalertState(text);
        setdialogState(true);
        setTimeout(() => {
            setdialogState(false);
        }, 2000);
    }

  const sendEmail = (e) => {
    e.preventDefault();
    if(nameState === "" || emailState === "" || messageState === ""){
        handledialog("Invalid Info!");
        return;
    }

    emailjs.sendForm('service_3ljmo2o', 'template_oe0kc3k', form.current, '1UU2uz9B_UhAF6tc5')
      .then((result) => {
          console.log(result.text);
          setnameState("");
          setemailState("");
          setmessageState("");
          handledialog("Successfully sent!");
      }, (error) => {
          console.log(error.text);
          handledialog("Error in sending!");
      });

    
  };

  return (
    <div className='login-container'>
        <div className={dialogState ? " dialog-box active" : "dialog-box"}>
            {alertState}
        </div>
        <form ref={form} onSubmit={sendEmail} id="only-form">
            <h3 className="input-title">Contact Me</h3>
            <div className="input-group">
                <label>Name</label>
                <input 
                    type="text" 
                    name="user_name" 
                    autoFocus 
                    spellCheck="false" 
                    autoComplete="off" 
                    value={nameState}
                    onChange={(e) =>{setnameState(e.target.value)}}
                    />
            </div>
            <div className="input-group">
                <label>Email</label>
                <input 
                    type="email" 
                    name="user_email" 
                    spellCheck="false" 
                    autoComplete="off"
                    value={emailState}
                    onChange={(e) =>{setemailState(e.target.value)}}
                    />
            </div>
            <div className="input-group message-group">
                <label>Message</label>
                <textarea 
                    name="message" 
                    className='message-box' 
                    spellCheck="false" 
                    autoComplete="off"
                    value={messageState}
                    onChange={(e) =>{setmessageState(e.target.value)}}
                    />
            </div>
            <input type="submit" value="Send" className='submit-btn'/>
        </form>

    </div>
  )
}

export default Contact;