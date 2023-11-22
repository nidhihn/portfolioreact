import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Contact.css";
import image from "../Svg/Insta.svg";
import image1 from "../Svg/Twitter.svg";
import image2 from "../Svg/Github.svg";
import image3 from "../Svg/Linkedin.svg";
import Loader from './Loader';

    
function Contact(){
    const [Loaders, setLoader] = useState(false);
    
    const form = useRef();
   
    const sendEmail = (e) => {
      e.preventDefault();
      setLoader(true)

  
      emailjs.sendForm('service_kmedaq4', 'template_zq2o77h', form.current, 'Sx0VoIa_z-OhpTGy_')
        .then((result) => {
            setLoader(false)
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
                    <p>  hnnidhi28@gmail.com</p>
                    
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
                        {!Loaders?
                        <button type="submit" class="btn">Submit</button>
                        :
                        <Loader/>
                         }
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default Contact;