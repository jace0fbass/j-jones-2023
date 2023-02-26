import React from "react";
import "../../css/App.css";
export default function Resume() {
  return (
    <div id="projCol" className=" card ">
      <h3 id="resumeText">
        Thank you for taking interest in my portfolio, please feel free to
        download my resume and reach out to me with any questions!
      </h3>
      <br></br>
      <a
        id="resumeBtn"
        href="https://drive.google.com/file/d/1RyruBtoWPUxtgnzK698WegDk23sFRIBv/view?usp=share_link"
      >
        View Resume
      </a>
      <br></br>
      <br></br>
      <h2 id="resSkills">Skills:</h2>
      <h3 id="skills">
        <div id="skillsContainer">
          <div>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Javascript</p>

            <p>jQuery</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            
            <p>MySQL</p>
            <p>Sequelize</p>
            <p>ORM</p>
            <p>Apollo</p>
            <p>Git</p>
          </div>
          <div>
            <p>ReactJS</p>
            <p>RESTful API</p>
            <p>GraphQL</p>
            
            <p>MVC</p>
            <p>Express</p>
            <p>Inquirer</p>
            <p>OOP</p>
            <p>Handlebars</p>
            <p>Bootstrap</p>
            <p>TDD</p>
            <p>AJAX</p>
            
          </div>
        </div>
      </h3>
    </div>
  );
}
