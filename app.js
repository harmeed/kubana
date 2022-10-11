const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const authRoutes = require("./router/auth.routes");
const profileRoutes = require("./router/profile.routes");
const passportSetup = require("./config/passport-setup");
// const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
const db = require("./models/index");
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
db.sequelize.sync();
// app.get('/createdb', (req, res)=>{
//   let sql = "CREATE DATABASE kubana_mysql";
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('database created....')
//   })
// })
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3800, () => {
  console.log("app now running on port http://localhost:3800");
});
