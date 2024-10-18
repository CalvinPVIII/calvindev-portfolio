import "../styles/AboutContent.css";
import "../styles/AboutContentSmall.css";
import SkillsIcon from "./SkillsIcon";
import skills from "../ts/skills";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
export default function AboutContext() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });
  return (
    <div id={isSmallScreen ? "about-container-small" : "about-container"}>
      <div id={isSmallScreen ? "about-left-small" : "about-left"} className={isSmallScreen ? "about-content-small" : "about-content"}>
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
          <a href="mailto:calvin.will.dev@gmail.com" id="contact-me" tabIndex={1}>
            Contact Me
          </a>
        </button>
        <p className="about-bullets reveal-text-left">Full stack developer</p>
        <p className="about-bullets reveal-text-left">Instructor</p>
        <p className="about-bullets reveal-text-left">Tech enthusiast</p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 1 }} id="left-side-about-spacer"></motion.div>
        <p className="reveal-text-left about-content-text">
          As passionate software developer, I thrive on the intersection of creativity and technology. With a diverse skill set spanning various
          languages and frameworks, I'm always eager to explore new challenges and push the boundaries of what's possible. My journey in software
          development has been shaped by a commitment to continuous learning and a deep-rooted belief in being better than I was the day before.
          Whether it's crafting elegant code, mentoring aspiring developers, or contributing to innovative projects, I am driven by a genuine love for
          the craft and a desire to make a meaningful impact in the ever-evolving tech landscape.
        </p>
      </div>
      {isSmallScreen ? null : (
        <motion.div id="about-spacer" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.4, delay: 0.6 }}></motion.div>
      )}
      <div id="about-right" className={isSmallScreen ? "about-content-small" : "about-content"}>
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
