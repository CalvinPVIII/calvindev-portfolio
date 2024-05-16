import { useSelector } from "react-redux";
import projects from "../ts/projects";
import { CurrentContentOptions } from "../redux/currentContentSlice";
import "../styles/ProjectContent.css";
import "../styles/ProjectContentSmall.css";

import { techBadges } from "../ts/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function ProjectContent() {
  const currentProject = useSelector((state: CurrentContentOptions) => state.selectedProject);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });
  if (!currentProject) return;
  return (
    <>
      <div id={isSmallScreen ? "project-content-header-small" : "project-content-header"}>
        <img src={projects[currentProject].icon} className="reveal-text" />
        <h1>
          <span className="reveal-text">{projects[currentProject].name}</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="underline"
            style={{ marginTop: "5px", width: "100%" }}
          ></motion.div>
        </h1>
      </div>
      <div id={isSmallScreen ? "project-content-body-small" : "project-content-body"}>
        <div id="project-content-body-left" className={isSmallScreen ? "project-content-small" : "project-content"}>
          <div id={isSmallScreen ? "project-tech-used-small" : "project-tech-used"}>
            {projects[currentProject].techUsed.map((tech, index) => (
              <img src={techBadges[tech]} className="tech-badge reveal-text-right" key={tech} style={{ animationDelay: `${index * 0.1 + 1}s` }} />
            ))}
          </div>

          <p className="reveal-text" style={{ animationDelay: "1s" }} id={isSmallScreen ? "project-desc-small" : "project-desc"}>
            {projects[currentProject].desc}
          </p>
          <div id={isSmallScreen ? "project-buttons-container-small" : "project-buttons-container"}>
            {projects[currentProject].deployedSite ? (
              <a
                href={projects[currentProject].deployedSite}
                className="project-buttons reveal-text-left"
                target="_none"
                style={{ animationDelay: "1.3s" }}
              >
                <FaExternalLinkAlt />
                visit
              </a>
            ) : null}

            {projects[currentProject].downloadLink ? (
              <a
                href={projects[currentProject].downloadLink}
                className="project-buttons reveal-text-left"
                target="_none"
                style={{ animationDelay: "1.3s" }}
              >
                <IoDownloadOutline size={24} />
                download
              </a>
            ) : null}
            <a
              href={projects[currentProject].sourceCode}
              className="project-buttons reveal-text-left"
              target="_none"
              style={{ animationDelay: "1.3s" }}
            >
              <IoLogoGithub size={24} />
              source
            </a>
          </div>
        </div>
        <div id="project-content-body-right" className={isSmallScreen ? "project-content-small" : "project-content"}>
          <div className="app-screenshot-wrapper reveal-from-bottom">
            <a href={projects[currentProject].deployedSite} target="_none">
              <img src={projects[currentProject].screenshot} className={isSmallScreen ? "app-screenshot-small" : "app-screenshot"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
