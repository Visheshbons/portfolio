import express from 'express';
const app = express();
const port = 7500;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const data = {
    name: 'Vishesh Kudva',
    age: 13,
    hobbies: ['Coding', 'Gaming', 'Reading'],
    what_i_do: ['A Full Stack Developer', 'A YouTuber', 'A Web Designer', 'An EJS User', 'An AI Enthusiast', 'A High-School Student', 'A Git User'],
    place: 'New Zealand',
    job: 'Student',
    langs: ['JavaScript', 'HTML', 'CSS'],
};

app.get('/', (req, res) => {
    res.render('index.ejs', { data });
}).use((eq, res) => {
    res.status(404).send('ERROR_404_PAGE_NOT_FOUND');
}).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

setInterval(() => {
    fetch("https://v-blogger.onrender.com")
        .catch(err => {
            console.error("Ping failed:", err);
        });
}, 60000); // 60,000 milliseconds = 1 minute