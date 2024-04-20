
const port1 = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.get("/shinu", (req, res) => {
  res.send("Hello Shinu! Welcome to Backend Course, \n i hope you enjoy it ");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello login User @soumyaranjan_purohit </h1>");
});

app.get("/youtube/shinu", (req, res) => {
  res.send(`<h2>Shinux Films</h2>`);
});

app.listen(process.env.PORT || port1, () => {
  console.log(`Example app listening on port ${port1}`);
});
