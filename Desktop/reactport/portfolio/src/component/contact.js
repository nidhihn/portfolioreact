import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Contact.css";
import image from "../Svg/Insta.svg";
import image1 from "../Svg/Twitter.svg";
import image2 from "../Svg/Github.svg";
import image3 from "../Svg/Linkedin.svg";
import image4 from "../Svg/Call.svg";
import image5 from "../Svg/Mail.svg";

    
function Contact(){
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kmedaq4', 'template_zq2o77h', form.current, 'Sx0VoIa_z-OhpTGy_')
        .then((result) => {
           alert("message sent");
           form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
         <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact me</h1>
                    <p> <img src={image5} alt="Image" class="icons"/> hnnidhi28@gmail.com</p>
                    <p> <img src={image4} alt="Image" class="icons"/> 8431061757</p>
                    <div class="social-icons">
                        <a href=""> <img src={image} alt="Image" class="icons"/></a>
                        <a href=""><img src={image1} alt="Image" class="icons"/></a>
                        <a href=""><img src={image2} alt="Image" class="icons"/></a>
                        <a href=""><img src={image3} alt="Image" class="icons"/></a>
                    </div>
                </div>    
                <div class="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your message"></textarea>
                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default Contact;