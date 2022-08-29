const express = require("express");
const cors = require("cors");
const path = require("path");
const axiosGet = require("axios").get;
const axiosPost = require("axios").post;
const qs = require("qs");
const { debug } = require("console");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tmhunt/", async (req, response) => {
  await axiosPost(
    "http://tmhunt.com/ngrams.php",
    qs.stringify({ query: req.query.query })
  ).then((res) => {
    response.send(res.data);
  });
});

app.get("/amazon/", async (req, response) => {
  await axiosGet(
    `https://completion.amazon.com/search/complete?search-alias=aps&client=amazon-search-ui&mkt=1&q=/${req.query.query}`
  ).then((res) => {
    response.send(res.data);
  });
});

app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
const port = process.env.port;
app.listen(process.env.PORT || 8080);
debug(app.port);
