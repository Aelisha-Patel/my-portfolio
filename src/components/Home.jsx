
import React from "react";
import './Home.css';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <section id="home">
            <div className="homecontent">
            <h1>Welcome to My Portfolio,</h1><br />
                    <p className="homePara">Hello! Thank you for visiting my portfolio website. I'm excited to share my work, experiences, and passion with you. </p>< br/>
                    <span className="home1"> "To learn, grow and make an impact."</span>
                    <br/>
                    <br />
                    <button><Link to="/about"> About me</Link></button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button><Link to="/projects"> My Projects</Link></button>
            </div>
        </section>
        
     );
     }
    