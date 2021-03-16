import axios from "axios";
const express = require("express");
const app = express();

app.get("/:slug", (req, res) => {
  const { data } = axios.get(
    `http://api.pantus.ru//products/redirect/${req.params.slug}`
  );
  console.log(data);
  res.send("1");
});

module.exports = {
  path: "/test",
  handler: app,
};
