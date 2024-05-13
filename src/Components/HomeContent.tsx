import "../styles/HomeContent.css";
import githubImg from "../assets/images/icons/github.png";
import linkedIn from "../assets/images/icons/linkedin.png";
import { ReactTyped } from "react-typed";

export default function HomeContent() {
  return (
    <>
      <h1 id="home-content-header" className="underline-text">
        calvin.dev
      </h1>
      <div id="social-links">
        <a href="https://www.github.com/calvinpviii" className="social-link-item" target="_none">
          <img src={githubImg} className="social-icon" />
          <p>calvinpviii</p>
        </a>
        <div id="socials-spacer"></div>
        <a href="https://www.linkedin.com/in/calvinwill/" className="social-link-item" target="_none">
          <img src={linkedIn} className="social-icon" />
          <p>calvinwill</p>
        </a>
      </div>
      <div className="terminal-text" id="home-terminal">
        <span style={{ color: "lime" }}>
          calvin@dev:<span style={{ color: "rgb(0, 119, 255)" }}>~</span>${" "}
        </span>
        <ReactTyped
          strings={[" Software Developer", " Teacher", " React Developer", " FOSS Advocate", "C# Developer", " Ruby Developer"]}
          typeSpeed={40}
          backSpeed={40}
          backDelay={5000}
          loop={true}
        />
      </div>
    </>
  );
}
