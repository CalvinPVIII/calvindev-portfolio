import "../styles/AboutContent.css";
import SkillsIcon from "./SkillsIcon";
import skills from "../ts/skills";

export default function AboutContext() {
  return (
    <div id="about-container">
      <div id="about-left" className="about-content">
        <h1 className="underline-text">calvin.dev</h1>
        <button id="contact-me-button">Contact Me</button>
        <p className="about-bullets">Full stack developer</p>
        <p className="about-bullets">Teacher</p>
        <p className="about-bullets">Tech enthusiast</p>
        <div id="left-side-about-spacer"></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quam. Voluptates labore error aperiam beatae laudantium, expedita autem eius
          et ipsam, pariatur vitae ut corporis ipsum numquam debitis sapiente. Repellendus.
        </p>
      </div>
      <div id="about-spacer"></div>
      <div id="about-right" className="about-content">
        <h1 className="underline-text">skills</h1>
        <div id="skills-cards">
          {skills.map((skill) => (
            <SkillsIcon name={skill.name} icon={skill.icon} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
