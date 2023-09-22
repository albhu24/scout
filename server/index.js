const { application } = require("express");
const express = require("express");
const json = require("json");
const app = express();
const PORT = 3000;

// middleware
app.use(json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
