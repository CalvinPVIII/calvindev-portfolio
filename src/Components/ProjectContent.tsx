import { useSelector } from "react-redux";
import projects from "../ts/projects";
import { CurrentContentOptions } from "../redux/currentContentSlice";
import "../styles/ProjectContent.css";
import { techBadges } from "../ts/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

export default function ProjectContent() {
  const currentProject = useSelector((state: CurrentContentOptions) => state.selectedProject);

  if (!currentProject) return;
  return (
    <>
      <div id="project-content-header">
        <img src={projects[currentProject].icon} />
        <h1>{projects[currentProject].name}</h1>
      </div>
      <div id="project-content-body">
        <div id="project-content-body-left" className="project-content">
          <div id="project-tech-used">
            {projects[currentProject].techUsed.map((tech) => (
              <img src={techBadges[tech]} className="tech-badge" key={tech} />
            ))}
          </div>

          <p className="reveal-text" id="project-desc">
            {projects[currentProject].desc}
          </p>
          <div id="project-buttons-container">
            {projects[currentProject].deployedSite ? (
              <a href={projects[currentProject].deployedSite} className="project-buttons" target="_none">
                <FaExternalLinkAlt />
                visit
              </a>
            ) : null}

            {projects[currentProject].downloadLink ? (
              <a href={projects[currentProject].downloadLink} className="project-buttons" target="_none">
                <IoDownloadOutline size={24} />
                download
              </a>
            ) : null}
            <a href={projects[currentProject].sourceCode} className="project-buttons" target="_none">
              <IoLogoGithub size={24} />
              source
            </a>
          </div>
        </div>
        <div id="project-content-body-right" className="project-content">
          <div className="app-screenshot-wrapper">
            <img src={projects[currentProject].screenshot} className="app-screenshot" />
          </div>
        </div>
      </div>
    </>
  );
}
