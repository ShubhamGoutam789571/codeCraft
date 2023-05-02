const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8060;
app.get("/", (req, res) => {
  res.send("HELLO SERVER");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
