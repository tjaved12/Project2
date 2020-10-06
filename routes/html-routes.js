// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// var day1 = require("../models/days.js");
module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.render("signup", {diet_db: email });
    }
    res.render(path.join(__dirname, "../views/signup.handlebars"));
  });
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/login");
    }
    res.render(path.join(__dirname, "../views/login.handlebars"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render(path.join(__dirname, "../views/members.handlebars"));
  });

  //Posting to DB
app.post("/members", function(req, res) {
  day1.create(["breakfast"],[req.body.task],
    function (result) {
            res.redirect("/");
    });
});
};