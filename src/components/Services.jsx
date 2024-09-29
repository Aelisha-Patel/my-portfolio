/**
*Aelisha-Patel
*ID: 301488557
*/

import React from "react";
import data from '../assets/data.jpg';
import web from '../assets/webdev.jpg';
import './Service.css';

export default function Services() {
    return (
        <section id='service'>
            <span className="serviceTitle">Offered Services </span>
            <br />
            <div className="serviceMenu">
                <div className="Service1">
                    <h6>Web Development</h6>
                    <img src={web} alt="web" className="service1Img"/>
                    <div className="service1Des">
                        <p>Creating responsive and user-friendly websites using modern technologies like HTML, CSS, JavaScript, and frameworks like React and Angular.</p><br />
                    </div>
                </div>
                <div className="Service2">
                    <h6>Database Management</h6>
                    <img src={data} alt="data" className="service2Img"/>
                    <div className="service2Des">
                        <p>Managing and optimizing databases for performance and reliability, including SQL and NoSQL solutions.</p><br />
                    </div>
                </div>
                
            </div>
        </section>
        
     );
 }