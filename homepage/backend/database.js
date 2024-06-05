const mysql = require("mysql");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();

app.use("/css", express.static(path.join(__dirname, "../css")));
app.use("/icones", express.static(path.join(__dirname, "../icones")));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
});

connection.connect((error) => {
  if (error) throw error;
  else console.log("Connected to the database successfully");
});

app.post("/signin",encoder ,function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    connection.query("Select * from user where email = ? and pswd = ? ",[email,password],function(error,results,fields){
        if(results.length > 0) {
            res.redirect("/");
        } else {
            res.redirect("/signupsignin");
        }
        res.end();
    })
});

app.post("/signup",encoder ,function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var date = req.body.date;
    var username = req.body.username;

    connection.query("INSERT INTO user (name, email, dateN, pswd) VALUES ('?', '?', '?', ?);",[username,email,date,password]);
});

app.listen(3306, () => {
  console.log("Server is running on port 3306");
});

app.get("/", function (req, res) {
  const filePath = path.join(__dirname, "../html/home.html");
  res.sendFile(filePath);
});

app.get("/signupsignin", function (req, res) {
  const filePath = path.join(__dirname, "../html/signupsignin.html");
  res.sendFile(filePath);
});

app.get("/profile", function (req, res) {
  const filePath = path.join(__dirname, "../html/profile.html");
  res.sendFile(filePath);
});

app.get("/annonce", function (req, res) {
  const filePath = path.join(__dirname, "../html/chercherAnnonces.html");
  res.sendFile(filePath);
});

app.get("/about", function (req, res) {
  const filePath = path.join(__dirname, "../html/about.html");
  res.sendFile(filePath);
});

app.get("/contact", function (req, res) {
  const filePath = path.join(__dirname, "../html/contact.html");
  res.sendFile(filePath);
});

app.get("/terms", function (req, res) {
  const filePath = path.join(__dirname, "../html/terms.html");
  res.sendFile(filePath);
});

app.get("/privacy", function (req, res) {
  const filePath = path.join(__dirname, "../html/privacy.html");
  res.sendFile(filePath);
});
