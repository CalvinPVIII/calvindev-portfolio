import "../styles/HomeContent.css";
import githubImg from "../assets/images/icons/github.png";
import linkedIn from "../assets/images/icons/linkedin.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function HomeContent() {
  return (
    <motion.div>
      <h1 id="home-content-header">
        <span className="reveal-text">calvin.dev</span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="underline"
          style={{ width: "75%", marginTop: "-24px" }}
        ></motion.div>
      </h1>
      <div id="social-links" className="reveal-text">
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
        <span style={{ color: "lime", animationDelay: "1s" }} className="reveal-text-left">
          calvin@dev:<span style={{ color: "rgb(0, 119, 255)" }}>~</span>${" "}
        </span>
        <ReactTyped
          className="show-item"
          strings={[" Software Developer", " Teacher", " React Developer", " FOSS Advocate", "C# Developer", " Ruby Developer"]}
          typeSpeed={40}
          backSpeed={40}
          backDelay={5000}
          startDelay={2500}
          loop={true}
        />
      </div>
    </motion.div>
  );
}
