import React from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_g12tkyd', 'template_zhkwsnx', e.target, 'user_Y6YjGwgLSDewt60ZT8CZP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    return (
        <div className="contact">
            <h3 className="line-bg">Contact me</h3>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="col-two">
                    <input type="text" name="user_name" placeholder="Your name" />
                    <input type="email" name="user_email" placeholder="Email address"/>                    
                </div>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea  name="message" placeholder="Your message here..."/>
                <input className="submit-btn" type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact
