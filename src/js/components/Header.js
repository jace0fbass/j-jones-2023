import React from "react";
import '../../css/App.css'
import about from './AboutMe'
import contact from './Contact'
import portfolio from './Portfolio'
import resume from './Resume'
export default function Header() {
    return (
        <div id="headerStyle">
        <h1 id="maName">Jason Jones</h1>
     <div id="navigate">
     <div>
        <a id="navigate" href={about}>About me</a>
     </div>
     <div>
        <a id="navigate" href={portfolio}>Portfolio</a>
     </div>
     <div>
        <a id="navigate" href={contact}>Contact</a>
     </div>
     <div>
        <a id="navigate" href={resume}>Resume</a>
     </div>
</div>
        </div>
    );
  }
  