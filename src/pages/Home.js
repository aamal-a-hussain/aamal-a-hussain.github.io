import React from "react";
import "../styles/Home.css"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { IoSchool } from "react-icons/io5";
import { GiArchiveResearch } from "react-icons/gi";



function Home() {
    return <div className="home">
        <div className="about">
            <h2>About me</h2>
            <div className="prompt"> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
            </div>
        </div>
        <div className="experience">
            <h2>Experience </h2>
            <VerticalTimeline lineColor="#0b1b43">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2018-2019"
                    iconStyle={{ background: "#0b1b43", color:  "	#FFFFFF"}}
                    icon={<GiArchiveResearch />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Imperial College London
                    </h3>
                    <h4>Doctoral Student</h4>
                    <p>Studying the Dynamical Systems Theory of Learning and Control of Multi-Agent Systems. In particular, we are analysing the Stability of Learning in Games with a large population of independent learners. We seek also to understand problems of formation control and swarm dynamics when modelled as an network game.</p>
                    <p>Funded under the Centre for Doctoral Training in Safe and Trusted AI, a collaboration between Imperial College London and King's College London.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2018-2019"
                    iconStyle={{ background: "#0b1b43", color:  "#FFFFFF"}}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        University College London (UCL)
                    </h3>
                    <p>Master of Science - MS, Robotics and Computation</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2015-2018"
                    iconStyle={{ background: "#0b1b43", color:  "#FFFFFF"}}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Imperial College London
                    </h3>
                    <p>Bachelor of Science - BS, Physics</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    </div>;
}

export default Home;