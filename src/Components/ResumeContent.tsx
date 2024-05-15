import React from "react";
import "../styles/ResumeContent.css";
import resume from "../ts/resume";
import { motion } from "framer-motion";
export default function ResumeContent() {
  return (
    <div id="resume-content-wrapper">
      <h1 className="resume-header reveal-text">work experience</h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="underline"
        style={{ width: "265px", marginTop: "-24px", marginLeft: "320px" }}
      ></motion.div>
      <div id="resume-list-wrapper">
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8 }} id="list-left-border"></motion.div>

        <ul id="resume-list">
          {resume.workExperience.map((job) => (
            <React.Fragment key={job.title}>
              <div className="bullet-header">
                <div className="list-dash reveal-text"></div>
                <li className="reveal-text-right">{job.title}</li>
              </div>
              <div className="bullet-content-headers reveal-text-right">
                {job.company ? <p className="bullet-content bullet-short-headers">{job.company}</p> : null}
                <p className="bullet-content bullet-short-headers">{job.date}</p>
              </div>
              <p className="bullet-content reveal-text-right">{job.description}</p>
            </React.Fragment>
          ))}
          <h1 className="underline-text resume-header reveal-text">education</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="underline"
            style={{ width: "165px", marginTop: "-24px", marginLeft: "370px" }}
          ></motion.div>
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
