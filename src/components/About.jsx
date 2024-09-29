/**
*Aelisha-Patel
*ID: 301488557
*/

import React from "react";
import './About.css';
import pic from "../assets/picture.jpg";

export default function About() {

      return (
            <section id="about">
                <div className="aboutcontent">
                    <span className="hello">Hello,</span><br/>
                        <span className="helloText">I'm </span><span className="helloName">Aelisha</span><br /><span className="helloName2">Software Developer</span>
                        <p className="helloPara"> Seeking an entry-level opportunity with an esteemed organization where I can <br/>explore my technical knowledge and enhanced <br />learning in the field of work.</p>
                        <br/>
                        <br/>
                       <button className="resumeBtn"> <a href="../assets/Aelisha_Patel_Resume.pdf" download> Download Resume</a></button>
                </div>
                <img src={pic} alt="portfolio" className="pic"/>
            </section>
            
         );
     
    }
    