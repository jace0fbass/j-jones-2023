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
          <h1 id="resume">Contact</h1>

          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Name:{" "}
              </label>
              <br></br>
              <input name="name" onChange={handleChange} value={formState.name}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Email:{" "}
              </label>
              <br></br>
              <input name="email" onChange={handleChange} value={formState.email}
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput3" className="form-label">
                Message:{" "}
              </label>
              <br></br>
              <textarea name="message" onChange={handleChange} value={formState.message} rows="4"
                type="text"
                className="form-control"
                id="formGroupExampleInput3"
              />
            </div>
            <button id="contactButton" type="button" class="btn btn-secondary">
              Submit
            </button>
          </form>
          <br></br>

          <a id="mailTo" href="mailto:jajones414@gmail.com">
            jajones414@gmail.com
          </a>
          <br></br>
          <br />
         
        </div>
      </div>
    </div>
  );
}

export default Contact