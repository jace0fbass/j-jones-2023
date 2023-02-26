import React, { useState } from "react";
import "../../css/App.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormState = {
      ...formState,
      [name]: value,
    };
    setFormState(updatedFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    window.alert("To be continued...");
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contactCard">
      <div id="contact" className="row">
        <div>
          <p>Jason Jones</p>
          <p>West Bend, WI</p>
          <a href="https://www.linkedin.com/in/jason-jones-0aa4b2249/">LinkedIn</a>
          <br></br>
          <br></br>
          <a href="https://github.com/jace0fbass">Github</a>
          <br></br>
          <br />
          <a id="mailTo" href="mailto:jajones414@gmail.com">
            jajones414@gmail.com
          </a>
         
      <br></br>
      <br></br>
        </div>
      </div>
    </div>
  );
}

export default Contact