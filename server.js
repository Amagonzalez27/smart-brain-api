const express = require("express"),
  bodyParser = require("body-parser"),
  bcrypt = require("bcrypt-nodejs"),
  cors = require("cors"),
  knex = require("knex"),
  register = require("./controllers/register"),
  signin = require("./controllers/signin"),
  profile = require("./controllers/profile"),
  image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1", //localhost
    user: "amanda",
    password: "",
    database: "smart-brain"
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});
app.post("/signin", signin.handleSignin(db, bcrypt));
app.post("/register", register.handleRegister(db, bcrypt));
app.get("/profile/:id", profile.handleProfileGet(db));
app.put("/image", image.handleImage(db));
app.post("/imageurl", image.handleApiCall());
app.listen(process.env.PORT || 3000, () => {
  console.log(`APP IS RUNNING ON PORT ${process.env.PORT}`);
});
