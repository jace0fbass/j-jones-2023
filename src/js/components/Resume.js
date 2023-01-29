import React from "react";
import "../../css/App.css";
export default function Resume() {
  return (
      <div id="resume-card" className="card">
          <h1>Resume</h1>
          <h3 id="resumeText">
            Thank you for taking interest in my portfolio, please feel free to
            download my resume and reach out to me with any questions!
          </h3>
        <h2>Skills:</h2>
        <h3 id="skills" >HTML, CSS, Javascript, jQuery, React, Node, MongoDB, Mongoose ODM, Express, MySQL, Sequelize, RESTful API, OOP, TDD, ORM, MVC, Inquirer, Handlebars, Bootstrap, AJAX, Moment, Git, wxWidgets. </h3>
        <a
          id="resumeBtn"
          href="https://drive.google.com/file/d/1h_8IlL0DU9sexRt6aMdwtbYSm4DyQ4ce/view?usp=sharing"
        >
          View Resume
        </a>
        <br></br>
        <br />
      </div>
  );
}
