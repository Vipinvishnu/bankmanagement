const express=require('express')
require("dotenv").config();
const cors = require("cors");


const bankServer = express();

bankServer.use(cors());

require("./db/connection");


const routes = require("./Routes/routes");

bankServer.use(express.json());

bankServer.use(routes);

const PORT = 4000 || process.env.PORT;

bankServer.listen(PORT, () => {
  console.log(`------------server started at ${PORT}------------`);
});

bankServer.get("/", (req, res) => {
  res.send("<h1> vishnu vipin</h1>");
});
