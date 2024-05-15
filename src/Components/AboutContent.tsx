import "../styles/AboutContent.css";
import SkillsIcon from "./SkillsIcon";
import skills from "../ts/skills";
import { motion } from "framer-motion";
export default function AboutContext() {
  return (
    <div id="about-container">
      <div id="about-left" className="about-content">
        <h1>
          <span className="reveal-text">calvin.dev</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="underline"
            style={{ marginTop: "20px", width: "200px" }}
          ></motion.div>
        </h1>

        <button id="contact-me-button" className=" reveal-text-left">
          Contact Me
        </button>
        <p className="about-bullets reveal-text-left">Full stack developer</p>
        <p className="about-bullets reveal-text-left">Teacher</p>
        <p className="about-bullets reveal-text-left">Tech enthusiast</p>
        <div id="left-side-about-spacer"></div>
        <p className="reveal-text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quam. Voluptates labore error aperiam beatae laudantium, expedita autem eius
          et ipsam, pariatur vitae ut corporis ipsum numquam debitis sapiente. Repellendus.
        </p>
      </div>
      <motion.div id="about-spacer" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.4, delay: 0.6 }}></motion.div>
      <div id="about-right" className="about-content">
        <h1>
          <span className="reveal-text">skills</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="underline"
            style={{ marginTop: "20px", width: "90px" }}
          ></motion.div>
        </h1>
        <div id="skills-cards">
          {skills.map((skill, index) => (
            <>
              <SkillsIcon index={index} name={skill.name} icon={skill.icon} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
