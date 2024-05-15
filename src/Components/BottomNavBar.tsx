import "../styles/BottomNavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeContent, CurrentContentOptions } from "../redux/currentContentSlice";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function BottomNavBar() {
  const dispatch = useDispatch();
  const currentContent = useSelector((state: CurrentContentOptions) => state.value);
  const currentVisibleProject = useSelector((state: CurrentContentOptions) => state.selectedProject);

  const handleChangeContent = (content: "home" | "about" | "projects" | "resume") => {
    dispatch(changeContent({ value: content, selectedProject: null }));
  };

  const handleBackArrow = () => {
    if (currentContent === "projects" && currentVisibleProject) {
      dispatch(changeContent({ value: "projects", selectedProject: null }));
      return;
    }
    if (currentContent === "projects" || currentContent === "about" || currentContent === "resume") {
      dispatch(changeContent({ value: "home", selectedProject: null }));
    }
  };

  return (
    <div id="bottom-navbar">
      {currentContent === "home" ? (
        <div id="bottom-navbar-content">
          <div className="bottom-content-wrapper reveal-text" onClick={() => handleChangeContent("about")}>
            <p>about</p>
          </div>
          <div className="bottom-content-wrapper reveal-text" onClick={() => handleChangeContent("projects")}>
            <p>projects</p>
          </div>
          <div className="bottom-content-wrapper reveal-text" onClick={() => handleChangeContent("resume")}>
            <p>resume</p>
          </div>
        </div>
      ) : (
        <div id="bottom-nav-back">
          <motion.div id="bottom-content-back" onClick={handleBackArrow} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <IoMdArrowBack size={30} />
            <div id="arrow-spacer"></div>
          </motion.div>
          <div className="bottom-nav-center">
            <p className="reveal-text">{currentContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
