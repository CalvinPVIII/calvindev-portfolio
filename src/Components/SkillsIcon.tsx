import "../styles/SkillsIcon.css";

interface SkillsIconProps {
  name: string;
  icon: string;
}

export default function SkillsIcon(props: SkillsIconProps) {
  return (
    <div className="skills-icon">
      <div className="icon-svg">
        <img src={props.icon} />
      </div>
      <p>{props.name}</p>
    </div>
  );
}
