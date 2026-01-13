import { name } from "ejs";
import express from "express";
const app = express();

const data = {
  name: "Vishesh Kudva",
  age: 14,
  hobbies: ["Coding", "Reading", "Cycling", "Gaming"],
  email: "vishesh.kudva@outlook.com",
  what_i_do: [
    "A Full Stack Developer",
    "A YouTuber",
    "A Web Designer",
    "An EJS User",
    "An AI Enthusiast",
    "A High-School Student",
    "A Git User",
  ],
  place: "New Zealand",
  job: "Student",
  langs: ["JavaScript", "HTML", "CSS", "Python", "EJS"],
  project: [
    {
      name: "First Portfolio",
      description:
        "This is my very first portfolio. It is a simple page built with just HTML.",
      link: "https://visheshbons.github.io/vk/",
    },
    {
      name: "Second Portfolio",
      description:
        "This is my second portfolio. It is a simple page built with just HTML and CSS.",
      link: "https://visheshbons.github.io/cv/",
    },
    {
      name: "FT Cars",
      description:
        "This is a page I build for my fictional car company. It is a simple page built with just HTML and CSS.",
      link: "https://visheshbons.github.io/FT/",
    },
    {
      name: "Simon Game",
      description:
        "This is a game I built, just when I was beginning to learn JavaScript. It is a game website.",
      link: "https://visheshbons.github.io/simon/",
    },
    {
      name: "Get Rickrolled.com",
      description:
        "This site was build purely for personal pleasure. It has some links, each ofwhich redirects into a Rickroll.",
      link: "https://visheshbons.github.io/Visheshbons.github.io_GetRickrolled.com/D.O.M.%20%20(Javascript%20website)/index.html",
    },
    {
      name: "Sri Jayam",
      description:
        "This was built for my aunt, who own a Beauty Parlor. This is one of my early full-stack creations.",
      link: "https://sri-jayam.onrender.com/",
    },
    {
      name: "V-Blogger",
      description:
        "This is a blogging website I built. It is a full-stack website, using JSON as data storage for the first time.",
      link: "https://v-blogger.onrender.com/",
    },
    {
      name: "My Latest Portfolio",
      description:
        "This is my latest portfolio. This page is built with just HTML, CSS and JavaScript.",
      link: "https://vishesh-kudva.onrender.com/",
    },
    {
      name: "Self-Driving ANN without any libraries",
      description:
        "This is a self-driving car simulation using an Artificial Neural Network (ANN) without any libraries. I am working on a 3d version using BeamNG.tech.",
      link: "https://vishesbons.github.io/self-driving-car/",
    },
    {
      name: "SHA1 Demo",
      description:
        "This is a live demo of the safety of SHA1 encryption. Here, you attempt a data breach.",
      link: "https://sha1-security-demo.onrender.com/",
    },
    {
      name: "Secrets",
      description: "Why not?",
      link: "https://",
    },
    {
      name: "V-RocketSim",
      description:
        "This is my first real attempt at a spaceflight game. Here, you can explore a full solar system with a small rocket.",
      link: "https://v-rocketsim.onrender.com/",
    },
  ],
};

const paras = [
  `Hi, I'm Vishesh Kudva, a 14-year-old Year 11 student based in New Zealand. As a dedicated learner and creative thinker, I balance multiple projects while honing my skills in JavaScript, HTML, and CSS.`,
  `My coding journey started at the age of eight, when I first explored Python. By eleven, I had built my first web pages using HTML and CSS, and today I'm fluent in JavaScript and EJS. This multi-language foundation allows me to build robust front-end interfaces, craft overkill back-end services, and collaborate seamlessly across modern development workflows.`,
  `Beyond software, I'm the founder and CEO of the fictional <a href="https://visheshbons.github.io/FT/">FT Cars</a> company, where I apply entrepreneurial thinking to prototype concepts and learn the ropes of product design and leadership. I also love speed - I've hit 51.75kph on my bike, proving that ambition extends off the screen too.`,
  `Outside of tech, I unwind by reading, always on the lookout for fresh ideas and stories. I'm eager to connect with fellow programmers, share insights on YouTube, and welcome feedback—especially on spelling, bugs, or design quirks—so feel free to reach out!`,
];

export { data, paras };
