import express from "express";
import { data, paras } from "./data.js";
const app = express();
const port = process.env.PORT || 7500;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
let render = false;

if (process.env.HOST == "render") {
  render = true;
}

app
  .get("/", (req, res) => {
    res.render("index.ejs", { data, paras, render });
  })
  .use((eq, res) => {
    res.status(404).send("ERROR_404_PAGE_NOT_FOUND");
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
