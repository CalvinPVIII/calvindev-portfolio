import React from "react";
import "../styles/ResumeContent.css";
import "../styles/ResumeContentSmall.css";
import resume from "../ts/resume";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
export default function ResumeContent() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });
  return (
    <div id={isSmallScreen ? "resume-content-wrapper-small" : "resume-content-wrapper"}>
      <h1 className={isSmallScreen ? "resume-header-small reveal-text" : "resume-header reveal-text"}>work experience</h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className={isSmallScreen ? "underline small-underline" : "underline"}
        style={isSmallScreen ? { width: "16rem", marginTop: "-24px" } : { width: "265px", marginTop: "-24px", marginLeft: "320px" }}
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
          <h1 className={isSmallScreen ? "resume-header-small reveal-text" : "resume-header reveal-text"}>education</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className={isSmallScreen ? "underline small-underline" : "underline"}
            style={
              isSmallScreen
                ? { width: "10rem", marginTop: "-24px", marginBottom: "20px" }
                : { width: "265px", marginTop: "-24px", marginLeft: "320px" }
            }
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
