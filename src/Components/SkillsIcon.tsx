import "../styles/SkillsIcon.css";

interface SkillsIconProps {
  name: string;
  icon: string;
  index: number;
}

export default function SkillsIcon(props: SkillsIconProps) {
  return (
    <div className="skills-icon reveal-diagonal-left-right" style={{ animationDelay: `${props.index * 0.1 + 1}s` }}>
      <div className="icon-svg">
        <img src={props.icon} />
      </div>
      <p>{props.name}</p>
    </div>
  );
}
