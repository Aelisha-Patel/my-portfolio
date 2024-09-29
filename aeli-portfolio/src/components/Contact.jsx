import React from "react";
import '../components/Contact.css';
export default function Contact() {
    return(
        <section className="contact">
            <div className="contactDiv">
                <h2 className="contactPageTitle">Contact Me</h2>
                <p>Please fill out the form below to discuss any work opportunities.</p>
                <br />
                <form className="contactForm" action="/">
                    <input type="text" classname="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows ="5" placeholder="your Message"></textarea>
                    <button type="submit" value="send" className="submitbtn">Submit</button>
                </form>
            </div>
        </section>
    );
}
    