import { ReactNode } from "react";
import "../styles/MainContentContainer.css";
import BottomNavBar from "./BottomNavBar";
import { useMediaQuery } from "react-responsive";
interface MainContentContainerProps {
  children: ReactNode;
}
const MainContentContainer: React.FC<MainContentContainerProps> = ({ children }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  console.log(isSmallScreen);

  if (isSmallScreen) {
    return (
      <div id="main-content-container-small">
        <div id="main-content-small">{children}</div>
        <BottomNavBar />
      </div>
    );
  }
  return (
    <div id="main-content-container">
      <div id="main-content">{children}</div>
      <BottomNavBar />
    </div>
  );
};

export default MainContentContainer;
