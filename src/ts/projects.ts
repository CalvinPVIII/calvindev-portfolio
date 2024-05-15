import comicCompanionIcon from "../assets/images/icons/comic-companion.png";
import senzuIcon from "../assets/images/icons/senzu-streams.png";
import comicScreenshot from "../assets/images/icons/Screenshots/comiccompanionscreenshot.png";
import senzuScreenshot from "../assets/images/icons/Screenshots/senzuscreenshot.png";

interface ProjectInfo {
  name: string;
  icon: string;
  desc: string;
  techUsed: string[];
  deployedSite?: string;
  downloadLink?: string;
  screenshot: string;
}

const projects: { [key: string]: ProjectInfo } = {
  "Comic Companion": {
    name: "Comic Companion",
    icon: comicCompanionIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et obcaecati, accusamus cupiditate illo praesentium quae veniam! Architecto commodi minus quidem ipsum, illo ea itaque quisquam laborum cumque. Beatae, debitis?",
    techUsed: ["C#", "MySQL", "React", "Redux", "TypeScript", "Android"],
    deployedSite: "https://comiccompanion.netlify.app/",
    downloadLink: "https://github.com/CalvinPVIII/ComicCompanion.Solution/releases",
    screenshot: comicScreenshot,
  },
  "Senzu Streams": {
    name: "Senzu Streams",
    icon: senzuIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et obcaecati, accusamus cupiditate illo praesentium quae veniam! Architecto commodi minus quidem ipsum, illo ea itaque quisquam laborum cumque. Beatae, debitis?",
    techUsed: ["React", "Redux", "TypeScript", "Express"],
    deployedSite: "https://senzu-streams.netlify.app/",
    screenshot: senzuScreenshot,
  },
};

export default projects;

export const techBadges: { [key: string]: string } = {
  React: "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black",
  "C#": "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
  Redux: "https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white",
  TypeScript: "https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white",
  Express: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  MySQL: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
  Android: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
};
