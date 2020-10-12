// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

var db = require("../models");
var passport = require("../config/passport");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// var day1 = require("../models/days.js");
module.exports = function (app) {
  app.get("/", function (req, res) {
    if (req.user) {
      res.render("login", {
        diet_db: email
      });
    }
    res.render(path.join(__dirname, "../views/login.handlebars"));
  });
  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render(path.join(__dirname, "../views/signup.handlebars"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    console.log("right here")
    console.log(req.user)

    mealPlan = {}

    db.Day1.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      })

      mealPlan.day1 = newData[0]
    
    });

    db.Day2.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      });
    

      mealPlan.day2 = newData[0]
      
    });
    db.Day3.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      })

      mealPlan.day3 = newData[0]
  
    });
    db.Day4.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      })

      mealPlan.day4 = newData[0]
      
    });
    db.Day5.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      })

      mealPlan.day5 = newData[0]
    
    });
    db.Day6.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      })

      mealPlan.day6 = newData[0]
      res.render("members", mealPlan);
    });

    db.Day7.findAll({
      where: {
        id: req.user.id
      }
    }).then(function (data) {
           let newData = data.map(meal => {
        return  {
          "id": meal.id,
          "breakfast": meal.breakfast,
          "amsnack": meal.amsnack,
          "lunch": meal.lunch,
          "pmsnack": meal.pmsnack,
          "dinner": meal.dinner
        }
      })

      mealPlan.day7 = newData[0]
      res.render("members", mealPlan);
  });
  }); 

  //Posting to DB
  app.post("/members", function (req, res) {
    day1.create(["breakfast"], [req.body.task],
      function (result) {
        res.redirect("/");
      });
 
    });
  }
