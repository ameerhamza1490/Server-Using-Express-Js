//sb se pahlay express js ko install krain gay cmd k through phir import krain gay. us k bad app name k variable main usay store krdain. server create ho jaye ga aise
import express from "express";
const app = express();

//app.get ka mtlb hai k mujhai user ki taraf se jo bi request aaye. or res.send k through main us user ko response send krunga
app.get("/", (req, res) => {
  console.log(`Hello World ${new Date()} ${req.url}.`);
  res.send(`Hello World ${new Date()}.`);
});

app.get("/home", (req, res) => {
  console.log(`Home ${Date.now()} ${req.url}.`);
  res.send(`Home ${Date.now()}.`);
});

//PORT capital main likhay gay hamesha. process.env.PORT is ka mtlab hai k mujhai jo bhi url assign ho mera server kam kray us par.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
