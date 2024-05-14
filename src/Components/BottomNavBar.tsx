import "../styles/BottomNavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeContent } from "../redux/currentContentSlice";

export default function BottomNavBar() {
  const dispatch = useDispatch();

  const handleChangeContent = (content: "home" | "about" | "projects" | "resume") => {
    dispatch(changeContent({ value: content }));
  };

  return (
    <div id="bottom-navbar">
      <div id="bottom-navbar-content">
        <div className="bottom-content-wrapper" onClick={() => handleChangeContent("about")}>
          <p>about</p>
        </div>
        <div className="bottom-content-wrapper" onClick={() => handleChangeContent("projects")}>
          <p>projects</p>
        </div>
        <div className="bottom-content-wrapper" onClick={() => handleChangeContent("resume")}>
          <p>resume</p>
        </div>
      </div>
    </div>
  );
}
