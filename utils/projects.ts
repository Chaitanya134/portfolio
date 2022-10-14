import ResumeBuilderImage from "../public/resume builder.jpeg";
import InNeedImage from "../public/inneed.png";

export const projects = [
    {
        name: "Resume Builder",
        description: "Resume Buider is a tool that helps user to build his/her custom made resume. \
        A user can choose from a wide variety of pre-defined templates which helps user to fast process the making of their resume. \
        The making of a resume has never been this easy. A new user can simply sign up on the portal and start creating his/her resume. \
        Every resume has a unique QR code associated to it. In order to access a resume a person can scan the QR code and access the resume.",
        description2: "Used the Drag n Drop API to let user have the freedom of choosing the layout of their resume.\
        Added a copy and edit feature that let's you copy a template and edit it as your own.",
        src: ResumeBuilderImage,
        techUsed: ["MERN Stack", "Sass", "jsPDF"],
        demoLink: "https://resume-builder-ineuron.netlify.app",
        githubRepoLink: "https://github.com/harshitkmr10/Resume-Builder"
    },
    {
        name: "InNeed",
        description: "A one stop solution to all the problems that are faced by refugees. \
        It explores the collaboration of public , private as well as individual entities to solve this problem. \
        I made the frontend and backend for the web app. Implemented carousel without using any existing libraries. \
        Intergrated the application with Oracle Apex to show line charts for refugee trends.",
        description2: "Made interfaces for dontation, services and registration as an NGO. \
        Analysed refugee migration metrics. Built the application in less than 50 hours.",
        src: InNeedImage,
        techUsed: ["MERN Stack", "Sass", "Oracle Apex"],
        demoLink: "https://in-need.netlify.app",
        githubRepoLink: "https://github.com/Chaitanya134/underfitters-InNeed"
    }
]