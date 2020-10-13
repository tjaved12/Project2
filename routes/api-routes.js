// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { create } = require("express-handlebars");


module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect("/api/login");
      })
      // .catch(function(err) {
      //   res.status(401).json(err);
      // });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  
  // Route for getting some data about our user to be used client side
  app.get("/api/user_diet", function(req, res) {
  
db.Day1.findAll({}).then(function (data) {
    console.log('Plan',data);
  res.json(data)
});

    }
  );
  app.get("/api/user_diet2", function(req, res) {
      db.Day2.findAll({}).then(function (data) {
           res.json(data)
    });
    
        }
      );
      app.get("/api/user_diet3", function(req, res) {
        db.Day3.findAll({}).then(function (data) {
             res.json(data)
      });
      
          }
        );
        app.get("/api/user_diet4", function(req, res) {
          db.Day4.findAll({}).then(function (data) {
               res.json(data)
        });
        
            }
          );
          app.get("/api/user_diet5", function(req, res) {
            db.Day5.findAll({}).then(function (data) {
                 res.json(data)
          });
          
              }
            );

            app.get("/api/user_diet6", function(req, res) {
              db.Day6.findAll({}).then(function (data) {
                   res.json(data)
            });
            
                }
              );

              app.get("/api/user_diet7", function(req, res) {
                db.Day7.findAll({}).then(function (data) {
                     res.json(data)
              });
              
                  }
                );
                app.put("/api/user_modify", function(req,res){
                 
                  db[req.body.day].update({
                    dinner: req.body.dinner,
                    breakfast: req.body.breakfast,
                    lunch: req.body.lunch,
                    amsnack: req.body.amsnack,
                    pmsnack: req.body.pmsnack
                  }, {
                    where: {
                      id: req.body.id
                    }
                  }).then(update => { 
                    res.send("this worked well")
                  })
                  console.log(req.body, "Body")
                })


                app.post("/api/user_add", function(req,res){
                 
                  db[req.body.day].create({
                    dinner: req.body.dinner,
                    breakfast: req.body.breakfast,
                    lunch: req.body.lunch,
                    amsnack: req.body.amsnack,
                    pmsnack: req.body.pmsnack
                  }, {
                    where: {
                      id: req.body.id
                    }
                  }).then(create => { 
                    res.send("this worked tooooooooo well")
                  })
                  console.log(req.body, "Body")
                })
};