import React from "react";
import "../styles/Home.css"
import "react-vertical-timeline-component/style.min.css"

import { IoSchool } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
import { PiBookOpenTextBold } from "react-icons/pi";
import { GrAd } from "react-icons/gr";
import { SiGooglescholar } from "react-icons/si";

import headshot from "../assets/Image.jpeg" 
import EmailComponent from '../components/EmailComponent';
// import msc_thesis from "../assets/"


function Home() {
    return (
        <section className="home">
            
            <div className="container home__container">

                <div className="home-left">
                    <img src={headshot} className="profile-img"/>
                    <div className="home-left-details">
                        <p className="title-1">Aamal Hussain</p>
                        <p className="curr-title"> Machine Learning Researcher </p>
                        <a  href="https://www.physicsx.ai/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="curr-location">
                            PhysicsX
                        </a>
                    </div>
                    <div className="profile-links">
                        <EmailComponent />
                        <a  href="https://www.linkedin.com/in/aamal-h-283471a3/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon">
                            <FaLinkedin size={40}/>
                        </a>
                        <a  href="https://scholar.google.co.uk/citations?user=HDuqAw8AAAAJ&hl=en&oi=sra" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon">
                            <SiGooglescholar size={40}/>
                        </a>
                        
                    </div>
                </div>

                <div className="home-right">
                    <div className="about-me">
                        <p className="title-1">About me</p>
                        <p className="about-txt"> 
                        I am a Junior Researcher in Data Science at PhysicsX, where I am developing Machine Learning 
                        methods for modelling dynamical systems on non-Euclidean geometries. Prior to this, I completed 
                        my PhD at Imperial College London under the supervision of Dr. Francesco Belardinelli and Dr. Dario 
                        Paccagnan. My main research interests lie at the intersections of Game Theory, 
                        Multi-Agent Reinforcement Learning and Online Optimisation. My work has explored the 
                        influence of graph structures on learning in large games with many players. Additionally, I
                         have explored how hyperparameter tuning influences the convergence and performance of online 
                         learning in games. Beyond this, I have also explored problems in optimal and predictive 
                         control of PDE constrained systems, particularly collective motion. 
                        </p>
                    </div>

                    {/* <div className="home-right-bottom">
                        <div className="interests">
                            <p className="title-2">  Interests </p>
                            <ul className="bullet-points">
                                <li>Game Theory</li>
                                <li>Control Theory</li>
                                <li>Dynamical Systems</li>
                                <li>Probabilistic Modelling</li>
                            </ul>
                        </div> */}

                        <div className="education">
                            <p className="title-2"> Education </p>
                            {/* <div className="education-list"> */}
                            <div className="education-item">
                                <IoSchool size={40} className="education-icon"/>
                                <div className="education-details">
                                    <p className="education-title"> PhD in Reinforcement Learning and Game Theory</p>
                                    <p className="education-location">Imperial College London, 2020-2024</p>
                                </div>
                            </div>

                            <div className="education-item">
                                <IoSchool size={40} className="education-icon"/>
                                <div className="education-details">
                                    <p className="education-title">MSc in Robotics and Computation</p>
                                    <p className="education-location">University College London (UCL), 2018-2019</p>
                                </div>
                            </div>

                            <div className="education-item">
                                <IoSchool size={40} className="education-icon"/>
                                <div className="education-details">
                                    <p className="education-title">BSc in Physics</p>
                                    <p className="education-location">Imperial College London, 2015-2018</p>
                                </div>
                            </div>

                            {/* <div> */}
                        </div>
                    {/* </div> */}
                </div>

            </div>

            <div className="research-topics">
                <div className="container  container__research-topics">
                    {/* <div className="research-title">
                        <p className="title">Interests</p>
                    </div> */}
                    
                    <div className="research-list">
                        <div className="research-item">
                            <LuCode2 size={80} className="research-icon"/>
                            <p className="title-2">Technologies</p>
                            <p className="research-txt">Python, C++, PyTorch, Julia, R</p>
                        </div>

                        <div className="research-item">
                            <PiBookOpenTextBold size={80} className="research-icon"/>
                            <p className="title-2">Specialisation</p>
                            <p className="research-txt">
                                Game Theory, Dynamical Systems, Multi-Agent Reinforcement Learning, Online Convex Optimisation
                            </p>
                        </div>

                        <div className="research-item">
                            <GrAd size={80} className="research-icon"/>
                            <p className="title-2">Other Interests </p>
                            <p className="research-txt">
                                Optimal Predictive Control, Bayesian Games, Partial Differential Equations, Gaussian Process, Deep Learning
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="dissertations">
                <div className="container  container__dissertations">
                    
                    <div className="dissertation-list">
                        <p className="title-2"> Dissertations </p>
                        
                        <a href={""} target="_blank" rel="noopener noreferrer" className="dissertation-item"> 
                            PhD - Asymptotic Convergence and Performance of Multi-Agent Q-Learning Dynamics 
                        </a>  
                        <p className="superviors"> Francesco Belardinelli and Dario Paccagnan </p>
                        
                        <p className="dissertation-item"> 
                            MSc - An Extension of Obstacle Avoidance Technologies to 3D 
                        </p>                        
                        <p className="superviors"> Simon Julier and Stephen Hailes </p>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default Home;

