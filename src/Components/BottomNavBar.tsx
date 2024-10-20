import "../styles/BottomNavBar.css";
import "../styles/BottomNavBarSmall.css";

import { useSelector, useDispatch } from "react-redux";
import { changeContent, CurrentContentOptions } from "../redux/currentContentSlice";
import { IoMdArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

export default function BottomNavBar() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });
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
          <div
            tabIndex={3}
            className={isSmallScreen ? "bottom-content-wrapper-small reveal-text" : "bottom-content-wrapper reveal-text"}
            style={{ animationDelay: "1s" }}
            onClick={() => handleChangeContent("about")}
          >
            <p>about</p>
          </div>
          <div
            tabIndex={4}
            className={isSmallScreen ? "bottom-content-wrapper-small reveal-text" : "bottom-content-wrapper reveal-text"}
            onClick={() => handleChangeContent("projects")}
            style={{ animationDelay: "1.4s" }}
          >
            <p>projects</p>
          </div>
          <div
            tabIndex={5}
            className={isSmallScreen ? "bottom-content-wrapper-small reveal-text" : "bottom-content-wrapper reveal-text"}
            onClick={() => handleChangeContent("resume")}
            style={{ animationDelay: "1.8s" }}
          >
            <p>resume</p>
          </div>
        </div>
      ) : (
        <div id="bottom-nav-back">
          <div id="bottom-content-back" onClick={handleBackArrow} tabIndex={3}>
            <IoMdArrowBack size={30} className="reveal-text" />
            <div id="arrow-spacer" className="reveal-text"></div>
          </div>
          <div className="bottom-nav-center">
            <p className="reveal-text">{currentContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
