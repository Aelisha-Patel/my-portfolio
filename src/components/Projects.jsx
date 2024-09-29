import React from "react";
import './Project.css';
import park from '../assets/parking.jpg';
import food from '../assets/food.jpg';
import house from '../assets/houserent.png';

export default function Project() {
    return (
        <section id='project'>
            <span className="projectTitle">My Projects</span>
            <br />
            <div className="ProjectMenu">
                <div className="Project1">
                    <h6>House Renting System</h6>
                    <img src={house} alt="house" className="project1Img"/>
                    <div className="project1Des">
                        
                        <p> Role: Full Stack Developer</p>
                        <p>Created a comprehensive house renting platform that streamlined the rental process and improved user satisfaction ratings.</p><br />
                    </div>
                </div>
                <div className="Project2">
                    <h6>Online Food App</h6>
                    <img src={food} alt="food" className="project2Img"/>
                    <div className="project2Des">
                        
                        <p>Software Developer</p>
                        <p>Developed a user-friendly online food ordering system that increased sales by 30% in the first month.</p><br />
                    </div>
                </div>
                <div className="Project3">
                    <h6>Secure Parking Management System</h6>
                    <img src={park} alt="parking" className="project3Img"/>
                    <div className="project3Des">
                        
                        <p> Project Lead</p>
                        <p>Outcome: Implemented a secure parking management system, reducing unauthorized access incidents by 50%.</p><br />
                    </div>
                </div>
            </div>
        </section>
        
     );
 }
    