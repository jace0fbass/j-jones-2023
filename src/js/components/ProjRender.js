import React from "react";

function ProjectRender(props) {
  const {
    id,
    title,
    description,
    skills,
    imageRoute,
    alt,
    deployedLink,
    githubLink,
  } = props;
  return (
    <div key={id} id="singleProj" className="col">
      <div className="card">
        <img src={imageRoute} className="card-img-top" alt={alt} height="263" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p id="description">{description}</p>
          <h6 id="skillList">Skills: {skills}</h6>
          <h5>
            Deployed Link: <a id="links" href={deployedLink}>{deployedLink}</a>
          </h5>
          <h5>
            Github Repository: <a id="links" href={githubLink}>{githubLink}</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default ProjectRender;
