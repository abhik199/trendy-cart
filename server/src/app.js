const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 6900;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
