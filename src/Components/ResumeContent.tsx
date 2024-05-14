import React from "react";
import "../styles/ResumeContent.css";
import resume from "../ts/resume";
export default function ResumeContent() {
  return (
    <div id="resume-content-wrapper">
      <h1 className="underline-text resume-header">work experience</h1>
      <div id="resume-list-wrapper">
        <div id="list-left-border"></div>

        <ul id="resume-list">
          {resume.workExperience.map((job) => (
            <React.Fragment key={job.title}>
              <div className="bullet-header">
                <div className="list-dash"></div>
                <li>{job.title}</li>
              </div>
              <div className="bullet-content-headers">
                {job.company ? <p className="bullet-content">{job.company}</p> : null}
                <p className="bullet-content">{job.date}</p>
              </div>
              <p className="bullet-content">{job.description}</p>
            </React.Fragment>
          ))}
          <h1 className="underline-text resume-header">education</h1>
          {resume.education.map((job) => (
            <React.Fragment key={job.title}>
              <div className="bullet-header">
                <div className="list-dash"></div>
                <li>{job.title}</li>
              </div>
              <div className="bullet-content-headers">
                {job.company ? <p className="bullet-content">{job.company}</p> : null}
                <p className="bullet-content">{job.date}</p>
              </div>
              <p className="bullet-content">{job.description}</p>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
