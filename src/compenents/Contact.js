import React from "react";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_saoruc8', 'template_tmb35l3', form.current, 'NYjokdICT0F01tKn1')
        e.target.reset()
      };
    return(
        <div className="contact" id="contactme">
             <h5 className="get_in_touch">Get In Touch</h5>
             <h2 className="contact_title">Contact Me</h2>

             <div className="container contact__container">
             <div className="contact__options">
                   <div>
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"></MdOutlineEmail>
                    <h4>Email</h4>
                    <h5>ouaquarouadie@gmail.com</h5>
                    <a href="mailto:ouaquarouadie@gmail.com" target="_blank">Send a message</a>
                    </article>
                    </div>
                    <div>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"></RiMessengerLine>
                    <h4>Messanger</h4>
                    <h5>egatortutorials</h5>
                    <a href="http://m.me/ouadie.ouaquar1" target="_blank">Send a message</a>
                    </article>
                    </div>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"></BsWhatsapp>
                    <h4>Whatsapp</h4>
                    <h5>+212637541024</h5>
                    <a href="https://api.whatsapp.com/send?phone+212637541024" target="_blank">Send a message</a>
                    </article>
             </div>
                </div>
                <div className="forme">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required></input>
                    <input type="email" name="email" placeholder="Your Email" required></input>
                    <textarea type="message" rows="7" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn-primary">Send- Message</button>
                </form>
                </div>
               
        </div>
    )
}