import React from "react";
import '../../css/App.css'
import headshot from '../../images/Screenshot_20220927-170400_DuckDuckGo.jpg'

export default function AboutMe() {
    return (
    <div id="AboutMe">
        <img id="headshot" src={headshot} alt="Jason Jones"/>
        <p id="bio"><strong>Hello my name is Jason Jones. I am newer to the field of web development but have been interested in the subject since I was a kid and being a developer has always been in the back corner of my mind. My life took a different career path through music in my late teens through 20's and more recently I have worked as a warehouse manager at a pneumatics and hydraulics distribution company. I want to learn technologies that I can use to build programs that make people's lives easier and more enjoyable. I love creating and I am greatly looking forward to this new career path!
            </strong></p>
        </div>
    )
}