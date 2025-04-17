import express from 'express';
import { data, paras } from './data.js';
const app = express();
const port = 7500;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs', { data, paras });
}).use((eq, res) => {
    res.status(404).send('ERROR_404_PAGE_NOT_FOUND');
}).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});