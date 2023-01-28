import React from "react"

function ProjectRender(props) {
const { id, title, description, skills, imageRoute, alt, deployedLink, githubLink } = props
    return (
<div key={id} id="singleProj" className="col">
          <div className="card">
            <img
              src={imageRoute}
              className="card-img-top"
              alt={alt}
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p>{description}</p>
              <h4>Skills:</h4>
              <h6>{skills}</h6>
              <h5>Deployed Link: <a href={deployedLink}>{deployedLink}</a></h5>
              <h5>Github Repository: <a href={githubLink}>{githubLink}</a></h5>
              <br></br>
              <br />
            </div>
          </div>
        </div>
)
}
export default ProjectRender


