import projects from "../ts/projects";
import { useDispatch } from "react-redux";
import { selectProject } from "../redux/currentContentSlice";
import "../styles/ProjectsListContent.css";
export default function ProjectsListContent() {
  const dispatch = useDispatch();

  const handleProjectClick = (project: string) => {
    dispatch(selectProject({ value: "projects", selectedProject: project }));
  };

  return (
    <div id="projects-list-container">
      {projects.map((project) => (
        <div className="project-item" onClick={() => handleProjectClick(project.name)} key={project.name}>
          <h2 className="project-list-name">{project.name}</h2>
          {projects.indexOf(project) !== projects.length - 1 ? <div className="project-list-spacer"></div> : null}
        </div>
      ))}
    </div>
  );
}
