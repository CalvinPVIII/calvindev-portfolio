import { useSelector } from "react-redux";
import projects from "../ts/projects";
import { CurrentContentOptions } from "../redux/currentContentSlice";
import "../styles/ProjectContent.css";
import { techBadges } from "../ts/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

export default function ProjectContent() {
  const currentProject = useSelector((state: CurrentContentOptions) => state.selectedProject);

  if (!currentProject) return;
  return (
    <>
      <div id="project-content-header">
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
      <div id="project-content-body">
        <div id="project-content-body-left" className="project-content">
          <div id="project-tech-used">
            {projects[currentProject].techUsed.map((tech, index) => (
              <img src={techBadges[tech]} className="tech-badge reveal-from-bottom" key={tech} style={{ animationDelay: `${index * 0.1 + 1}s` }} />
            ))}
          </div>

          <p className="reveal-text" style={{ animationDelay: "1s" }} id="project-desc">
            {projects[currentProject].desc}
          </p>
          <div id="project-buttons-container">
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
        <div id="project-content-body-right" className="project-content">
          <div className="app-screenshot-wrapper reveal-from-middle">
            <a href={projects[currentProject].deployedSite} target="_none">
              <img src={projects[currentProject].screenshot} className="app-screenshot " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
