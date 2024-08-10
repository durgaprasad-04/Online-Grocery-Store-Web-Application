const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Login = require("./Routers/Login");
const Register = require("./Routers/Register")
const Admin = require("./Routers/Admin")
const Carts = require("./Routers/Carts")

require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;


//MongoDB Compass connection
MONGODB_URL = "(urs mongodb url)";
mongoose.connect(MONGODB_URL)
const conn = mongoose.connection;

conn.once('open',() => {
  console.log("Connected successfully to Mongo DB");
})

conn.on('err',() => {
  console.log("Failed to connect Mongo DB");
  process.exit();
})

app.use(Login);
app.use(Register);
app.use(Admin);
app.use(Carts);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
