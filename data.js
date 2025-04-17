import express from 'express';
const app = express();

const data = {
    name: 'Vishesh Kudva',
    age: 13,
    hobbies: ['Coding', 'Gaming', 'Reading'],
    what_i_do: ['A Full Stack Developer', 'A YouTuber', 'A Web Designer', 'An EJS User', 'An AI Enthusiast', 'A High-School Student', 'A Git User'],
    place: 'New Zealand',
    job: 'Student',
    langs: ['JavaScript', 'HTML', 'CSS', 'Python', 'EJS'],
};

const paras = [
    `Hi, I'm Vishesh Kudva, a 13-year-old high-school student based in New Zealand. As a dedicated learner and creative thinker, I balance multiple roles while honing my skills in JavaScript, HTML, and CSS.`,
    `My coding journey started at the age of eight, when I first explored Python. By eleven, I had built my first web pages using HTML and CSS, and today I'm fluent in JavaScript and EJS. This multi-language foundation empowers me to architect robust front-end interfaces, craft dynamic back-end services, and collaborate seamlessly across modern development workflows.`,
    `Beyond software, I'm the founder and CEO of the fictional <a href="https://visheshbons.github.io/FT/">FT Cars</a> company, where I apply entrepreneurial thinking to prototype concepts and learn the ropes of product design and leadership. I also love speed - I've hit 51.75kph on my bike, proving that ambition extends off the screen too.`,
    `Outside of tech, I unwind by reading, always on the lookout for fresh ideas and stories. I'm eager to connect with fellow programmers, share insights on YouTube, and welcome feedback—especially on spelling, bugs, or design quirks—so feel free to reach out!`,
];

export { data, paras };