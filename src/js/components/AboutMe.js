import React from "react";
import '../../css/App.css'
import headshot from '../../images/Screenshot_20220927-170400_DuckDuckGo.jpg'

export default function AboutMe() {
    return (
    <div id="AboutMe" className="container">
        <img id="headshot" src={headshot} alt="Jason Jones"/>
        <p id="bio"><h2>Fullstack Web Developer</h2><strong>Hello my name is Jason Jones. I am a web developer leveraging a background in fluid power technology and music production to provide unique perspectives on how end-users interact with websites and software platforms. I have recently graduated from a Full Stack Web Development bootcamp at the University of Wisconsin Extended Campus. 
            <br></br>
        <br></br>    
        Innovative problem-solver who is passionate about developing applications with a focus on mobile-first design and development. Warehouse logistics professional with 9+ years of experience transitioning to the field of web development. I want to learn technologies that I can use to build programs that make people's lives easier and more enjoyable. I love creating and I am greatly looking forward to this new career path!
            </strong></p>
        </div>
    )
}