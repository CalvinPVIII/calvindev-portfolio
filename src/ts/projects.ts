import comicCompanionIcon from "../assets/images/icons/comic-companion.png";
import senzuIcon from "../assets/images/icons/senzu-streams.png";
import comicScreenshot from "../assets/images/icons/Screenshots/comiccompanionscreenshot.png";
import senzuScreenshot from "../assets/images/icons/Screenshots/senzuscreenshot.png";
import lhtp from "../assets/images/icons/lhtp.png";
import lhtpScreenshot from "../assets/images/icons/Screenshots/lhtpscreenshot.png";
import loungeScreenshot from "../assets/images/icons/Screenshots/loungespotscreenshot.png";

interface ProjectInfo {
  name: string;
  icon?: string;
  desc: string;
  techUsed: string[];
  deployedSite?: string;
  downloadLink?: string;
  screenshot: string;
  sourceCode: string;
}

const projects: { [key: string]: ProjectInfo } = {
  "Comic Companion": {
    name: "Comic Companion",
    icon: comicCompanionIcon,
    desc: "Comic Companion is your go-to platform for comic enthusiasts, available on Android and the web. Dive into a vast collection of comics, spanning from golden age classics to weekly releases. Easily organize your library and create curated reading lists to share with friends. Powered by C#, ASP.NET API, and PostgresSQL, with React, Redux, and TypeScript for the frontend, Comic Companion delivers a seamless reading experience with robust user authentication and authorization, as well as library syncing across any device. Explore your favorite stories with ease.",
    techUsed: ["C#", "Postgres", "React", "Redux", "TypeScript", "Android"],
    deployedSite: "https://comiccompanion.netlify.app/",
    downloadLink: "https://github.com/CalvinPVIII/ComicCompanion.Solution/releases",
    screenshot: comicScreenshot,
    sourceCode: "https://github.com/CalvinPVIII/ComicCompanion.Solution",
  },
  "Senzu Streams": {
    name: "Senzu Streams",
    icon: senzuIcon,
    desc: "Senzu Streams stands as the ultimate destination for Dragon Ball aficionados, offering a comprehensive streaming experience. Dive into the rich universe of Dragon Ball, from its inception to the latest cinematic releases, all conveniently housed under one virtual roof. Senzu Streams doesn't just stop at on-demand content; it also hosts a 24/7 live feed, ensuring fans never miss a moment of their favorite saga. Engage in lively discussions with fellow fans via the integrated chat feature. Crafted with React, TypeScript, and Express.js, Senzu Streams delivers a seamless user experience, while its accompanying Express API provides accessible endpoints for developers to harness. Whether reliving iconic battles or exploring new adventures, Senzu Streams caters to every Dragon Ball enthusiast's viewing needs.",
    techUsed: ["React", "Redux", "TypeScript", "Express"],
    deployedSite: "https://senzu-streams.netlify.app/",
    screenshot: senzuScreenshot,
    sourceCode: "https://github.com/CalvinPVIII/senzu-streams",
  },
  "Lounge Spot": {
    name: "Lounge Spot",
    desc: "Lounge Spot is full stack watch party app built to bring users together to watch their favorite videos in real time. The integrated chat feature keeps you connected, allowing seamless discussion and banter throughout the viewing experience. Built using Flask API, WebSockets, and React/TypeScript, Lounge Spot provides a robust and scalable platform for your online gatherings. With its user-friendly interface, creating and joining rooms is as easy as sending an invite to friends or family members. ",
    techUsed: ["React", "TypeScript", "Python", "Flask"],
    deployedSite: "https://loungespot.netlify.app/",
    screenshot: loungeScreenshot,
    sourceCode: "https://github.com/CalvinPVIII/Lounge-Spot",
  },
  "Learn How To Program": {
    name: "Learn How To Program",
    icon: lhtp,
    desc: "LearnHowToProgram is an in-depth full-stack development curriculum. As a pivotal member of the development team, I played a significant role in crafting and refining the curriculum, ensuring its efficacy in guiding aspiring web developers through their learning journey. Moreover, I actively participated in teaching and mentoring students, sharing my insights and expertise to help them grasp complex concepts and excel in their programming endeavors. Through my dedication and passion for web development, I helped shape LearnHowToProgram into a comprehensive and invaluable resource for individuals eager to embark on a career in coding.",
    techUsed: ["React", "C#", "Redux", "Ruby", "Rails"],
    deployedSite: "https://www.learnhowtoprogram.com/",
    screenshot: lhtpScreenshot,
    sourceCode: "https://github.com/epicodus-curriculum",
  },
};

export default projects;

export const techBadges: { [key: string]: string } = {
  React: "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black",
  "C#": "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
  Redux: "https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white",
  TypeScript: "https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white",
  Express: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  Postgres: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  Android: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
  Python: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  Flask: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
  Ruby: "https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",
  Rails: "https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
};
