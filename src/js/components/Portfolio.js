import React from "react";
import ProjRender from "./ProjRender";
import ProjCardData from "../../ProjCardData";

export default function Portfolio() {
  const [projList, setProjList] = useState(ProjCardData);

  return (
    <div id="portCards">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectList.map((project) => (
          <ProjRender
            id={project.id}
            title={project.title}
            desc={project.description}
            tech={project.data}
            imageRoute={project.imageRoute}
            alt={project.alt}
            link={project.deployedLink}
            repo={project.githubLink}
          />
        ))}

        {/* <div id="singleProj" className="col">
          <div className="card">
            <img
              src={moonstone}
              className="card-img-top"
              alt="..."
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">laurenatmoonstone.com</h5>
              <h4>Skills:</h4>
              <h6>HTML, CSS, Bootstrap, Git</h6>
              <a href="https://laurenatmoonstone.com/" id="portfolioBtns">
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>



        <div id="singleProj" className="col">
          <div className="card">
            <img
              src={teamProfile}
              className="card-img-top"
              alt="..."
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">Team Profile Maker</h5>
              <h4>Skills:</h4>
              <h6>
                HTML, CSS, Bootstrap, Javascript, Inquirer, OOP, TDD, Node, Git
              </h6>
              <a
                href="https://github.com/jace0fbass/team-profile-maker"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

        <div id="singleProj" class="col">
          <div class="card">
            <img src={tekB} class="card-img-top" alt="..." height="263" />
            <div class="card-body">
              <h5 class="card-title">tekBLAHg</h5>
              <h4>Skills:</h4>
              <h6>
                HTML, CSS, Javascript, MVC, ORM, MySQL, Sequelize, OOP, Express,
                Node
              </h6>
              <a
                href="https://tekblog-app.herokuapp.com/login"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

        <div id="singleProj" className="col">
          <div className="card">
            <img
              src={empTrack}
              className="card-img-top"
              alt="..."
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">Employee Tracker Database</h5>
              <h4>Skills:</h4>
              <h6>Javascript, Inquirer, MySQL, OOP, Express, Node</h6>
              <a
                href="https://github.com/jace0fbass/employee-tracker-app"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div id="singleProj" className="col">
          <div className="card">
            <img
              src={socialApi}
              className="card-img-top"
              alt="..."
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media Back-End API</h5>
              <h4>Skills:</h4>
              <h6>
                Javascript, NoSQL, MongoDB, Mongoose, Postman, ORM, OOP,
                Express, Node
              </h6>
              <a
                href="https://github.com/jace0fbass/social-media-api"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

        <div id="singleProj" className="col">
          <div className="card">
            <img
              src={musicalC}
              className="card-img-top"
              alt="..."
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">Musical Chairs</h5>
              <h4>Skills:</h4>
              <h6>
                Javascript, Handlebars, MVC, ORM, MySQL, Sequelize, OOP,
                Express, Node
              </h6>
              <a
                href="https://secret-hamlet-03727.herokuapp.com/"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

        <div id="singleProj" className="col">
          <div className="card">
            <img src={ecomB} className="card-img-top" alt="..." height="263" />
            <div className="card-body">
              <h5 className="card-title">E-commerce Back-End API</h5>
              <h4>Skills:</h4>
              <h6>
                Javascript, ORM, MySQL, Sequelize, OOP, Insomnia, Express, Node
              </h6>
              <a
                href="https://github.com/jace0fbass/E-com-back-end-build"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div id="singleProj" className="col">
          <div className="card">
            <img
              src={read2me}
              className="card-img-top"
              alt="..."
              height="263"
            />
            <div className="card-body">
              <h5 className="card-title">Reed2Mii (mobile)</h5>
              <h4>Skills:</h4>
              <h6>HTML, CSS, Javascript, Git</h6>
              <a
                href="https://jace0fbass.github.io/read-2-me/"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

        <div id="singleProj" className="col">
          <div class="card">
            <img src={artHub} class="card-img-top" alt="..." height="263" />
            <div class="card-body">
              <h5 class="card-title">Art-Hub</h5>
              <h4>Skills:</h4>
              <h6>Javascript, jQuery, REST API, Git</h6>
              <a href="https://ddwk21.github.io/art-hub/" id="portfolioBtns">
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div>

        <div id="singleProj" className="col">
          <div class="card">
            <img src={workDay} class="card-img-top" alt="..." height="263" />
            <div class="card-body">
              <h5 class="card-title">Work Day Scheduler</h5>
              <h4>Skills:</h4>
              <h6>HTML, CSS, Javascript, jQuery, Moment, Git</h6>
              <a
                href="https://jace0fbass.github.io/work-day-scheduler/"
                id="portfolioBtns"
              >
                View Project
              </a>
              <br></br>
              <br />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
