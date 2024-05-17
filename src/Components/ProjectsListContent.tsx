import projects from "../ts/projects";
import { useDispatch } from "react-redux";
import { selectProject } from "../redux/currentContentSlice";
import "../styles/ProjectsListContent.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
export default function ProjectsListContent() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  const dispatch = useDispatch();

  const handleProjectClick = (project: string) => {
    dispatch(selectProject({ value: "projects", selectedProject: project }));
  };

  return (
    <div id="projects-list-container">
      {Object.values(projects).map((project, index) => (
        <motion.div className="project-item" onClick={() => handleProjectClick(project.name)} key={project.name} tabIndex={index + 1}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.3 }}>
            <h2 className="project-list-name">{project.name}</h2>
          </motion.div>
          {Object.values(projects).indexOf(project) !== Object.values(projects).length - 1 ? (
            <motion.div
              className={isSmallScreen ? "project-list-spacer-small" : "project-list-spacer"}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
