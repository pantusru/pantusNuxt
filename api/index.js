import axios from "axios";
const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.redirect("https://bx.pantus.ru" + req.originalUrl);
  // const request = await axios.get("https://bx.pantus.ru" + req.originalUrl, {
  //   "content-type": " image/jpeg",
  // });
  // console.log(request);
  // await res.sendFile(request.data);
});

module.exports = {
  path: "/upload",
  handler: app,
};
