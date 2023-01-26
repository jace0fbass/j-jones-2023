import React from "react";
import moonstone from '../../images/moonstone.jpg'
import socialApi from '../../images/socialMediaApi.jpg'
import teamProfile from '../../images/teamProfileMaker.jpg'
import tekB from '../../images/tekblahg.jpg'
import artHub from '../../images/artHub.jpg'
import ecomB from '../../images/ecomBackEnd.jpg'
import empTrack from '../../images/empTracker.jpg'
import musicalC from '../../images/musicalChairs.jpg'
import read2me from '../../images/read2me.jpg'
import workDay from '../../images/workDayScheduler.jpg'

export default function Portfolio() {
  return (
    <div id="portCards">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div id="singleProj" className="col">
          <div className="card">
            <img src={moonstone} className="card-img-top" alt="..." height="263" />
            <div className="card-body">
              <h5 className="card-title">laurenatmoonstone.com</h5>
              <h6>Skills used:</h6>
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
            <img src={teamProfile} className="card-img-top" alt="..." height="263" />
            <div className="card-body">
              <h5 className="card-title">Team Profile Maker</h5>

              <h6>Skills used:</h6>
              <a href="https://github.com/jace0fbass/team-profile-maker" id="portfolioBtns">View Project</a>
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

              <h6>Skills used:</h6>
              <a href="https://tekblog-app.herokuapp.com/login" id="portfolioBtns">View Project</a>
              <br></br>
              <br />
            </div>
          </div>
        </div>
        <div id="singleProj" className="col">
          <div className="card">
            <img src={empTrack} className="card-img-top" alt="..." height="263" />
            <div className="card-body">
              <h5 className="card-title">Employee Tracker Database</h5>
              <h6>Skills used:</h6>
              <a href="https://github.com/jace0fbass/employee-tracker-app" id="portfolioBtns">
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
            <img src={socialApi} className="card-img-top" alt="..." height="263" />
            <div className="card-body">
              <h5 className="card-title">Social Media Back-End API</h5>

              <h6>Skills used:</h6>
              <a href="https://github.com/jace0fbass/social-media-api" id="portfolioBtns">View Project</a>
              <br></br>
              <br />
            </div>
          </div>
        </div>
        <div id="singleProj" className="col">
          <div className="card">
            <img src={musicalC} className="card-img-top" alt="..." height="263" />
            <div className="card-body">
              <h5 className="card-title">Musical Chairs</h5>

              <h6>Skills used:</h6>
              <a href="https://secret-hamlet-03727.herokuapp.com/" id="portfolioBtns">View Project</a>
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

              <h6>Skills used:</h6>
              <a href="https://github.com/jace0fbass/E-com-back-end-build" id="portfolioBtns">View Project</a>
              <br></br>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">

        
        <div id="singleProj" className="col">
          <div className="card">
            <img src={read2me} className="card-img-top" alt="..."height="263" />
            <div className="card-body">
              <h5 className="card-title">Reed2Mii (mobile)</h5>

              <h6>Skills used:</h6>
              <a href="https://jace0fbass.github.io/read-2-me/" id="portfolioBtns">View Project</a>
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

              <h6>Skills used:</h6>
              <a href="https://ddwk21.github.io/art-hub/" id="portfolioBtns">View Project</a>
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

              <h6>Skills used:</h6>
              <a href="https://jace0fbass.github.io/work-day-scheduler/" id="portfolioBtns">View Project</a>
              <br></br>
              <br />
            </div>
          </div>
        </div>
        </div>
        </div>
  );
}
