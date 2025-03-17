import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log(`Hello World ${new Date()} ${req.url}.`);
  res.send(`Hello World ${new Date()}.`);
});

app.get("/home", (req, res) => {
  console.log(`Home ${Date.now()} ${req.url}.`);
  res.send(`Home ${Date.now()}.`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
