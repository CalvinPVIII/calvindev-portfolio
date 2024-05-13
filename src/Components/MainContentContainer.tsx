import { ReactNode } from "react";
import "../styles/MainContentContainer.css";
import BottomNavBar from "./BottomNavBar";
interface MainContentContainerProps {
  children: ReactNode;
}
const MainContentContainer: React.FC<MainContentContainerProps> = ({ children }) => {
  return (
    <div id="main-content-container">
      <div id="main-content">{children}</div>
      <BottomNavBar />
    </div>
  );
};

export default MainContentContainer;
