import HomeContent from "./Components/HomeContent";
import MainContentContainer from "./Components/MainContentContainer";
import { useSelector } from "react-redux";
import { CurrentContentOptions } from "./redux/currentContentSlice";
import AboutContext from "./Components/AboutContent";
import ResumeContent from "./Components/ResumeContent";
import ProjectsListContent from "./Components/ProjectsListContent";
import ProjectContent from "./Components/ProjectContent";

function App() {
  const currentContent = useSelector((state: CurrentContentOptions) => state.value);
  const currentVisibleProject = useSelector((state: CurrentContentOptions) => state.selectedProject);

  return (
    <>
      <MainContentContainer>
        {currentContent === "home" ? (
          <HomeContent />
        ) : currentContent === "about" ? (
          <AboutContext />
        ) : currentContent === "resume" ? (
          <ResumeContent />
        ) : currentContent === "projects" && currentVisibleProject ? (
          <ProjectContent />
        ) : currentContent === "projects" ? (
          <ProjectsListContent />
        ) : (
          <></>
        )}
      </MainContentContainer>
    </>
  );
}

export default App;
