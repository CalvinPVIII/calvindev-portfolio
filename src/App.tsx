import HomeContent from "./Components/HomeContent";
import MainContentContainer from "./Components/MainContentContainer";
import { useSelector } from "react-redux";
import { CurrentContentOptions } from "./redux/currentContentSlice";
import AboutContext from "./Components/AboutContent";
import ResumeContent from "./Components/ResumeContent";
import ProjectsListContent from "./Components/ProjectsListContent";

function App() {
  const currentContent = useSelector((state: CurrentContentOptions) => state.value);

  return (
    <>
      <MainContentContainer>
        {currentContent === "home" ? (
          <HomeContent />
        ) : currentContent === "about" ? (
          <AboutContext />
        ) : currentContent === "resume" ? (
          <ResumeContent />
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
