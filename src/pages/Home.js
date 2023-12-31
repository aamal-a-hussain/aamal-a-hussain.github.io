import React from "react";
import "../styles/Home.css"
import "react-vertical-timeline-component/style.min.css"
import { IoSchool } from "react-icons/io5";
import headshot from "../assets/Image.jpeg" 



function Home() {
    return (
        <section className="home">
            
            <div className="container home__container">

                <div className="container home__left">
                    <div className="about-image">
                        <img src={headshot} alt="About Image" className="img"/>
                    </div>
                    <p className="title">Aamal Hussain</p>
                    <p className="curr-title"> Machine Learning Researcher </p>
                    <a  href="https://www.physicsx.ai/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="curr-location">
                        PhysicsX
                    </a>
                </div>

                <div className="container home__right">
                    <div className="container__about-me">
                        <p className="title">About me</p>
                        <p className="about-txt"> I am a passionate researcher in the field of behaviour and decision making, specialising in informed decision making, behaviour change, and the influence of digital communication and interventions. My focus spans a variety of topics, ranging from sexual and reproductive health to the disclosure of mental health issues and climate change. In essence, anything related to behaviour and decision making, as well as its support, captures my interest. </p>
                    </div>

                    <div className="container home__right-bottom">
                        <div className="container__interests">
                            <p className="title-2">  Interests </p>
                            <ul className="bullet-points">
                                <li>Game Theory</li>
                                <li>Control</li>
                                <li>Dynamical Systems</li>
                                <li>Dynamical Systems</li>
                            </ul>
                        </div>

                        <div className="container__experience">
                            <p className="title-2"> Education </p>
                            {/* <div className="education-list"> */}
                            <div className="education-item">
                                <IoSchool size={45} className="education-icon"/>
                                <div>
                                    <p className="education-title"> PhD in Reinforcement Learning and Game Theory</p>
                                    <p className="education-location">Imperial College London, 2020-2024</p>
                                </div>
                            </div>

                            <div className="education-item">
                                <IoSchool size={45} className="education-icon"/>
                                <div>
                                    <p className="education-title">MSc in Robotics and Computation</p>
                                    <p className="education-location">University College London (UCL), 2018-2019</p>
                                </div>
                            </div>

                            <div className="education-item">
                                <IoSchool size={45} className="education-icon"/>
                                <div>
                                    <p className="education-title">BS Physics</p>
                                    <p className="education-location">Imperial College London, 2015-2018</p>
                                </div>
                            </div>

                            {/* <div> */}
                        </div>
                    </div>
                </div>

            </div>

            <div className="container  container__tech-stack">
                <p className="title-2">Tech Stack</p>
                <p className="title-2">Skills</p>
            </div>

        </section>
    );
}

export default Home;