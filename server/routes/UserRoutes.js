const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const User = require('../models/user.model');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  app.get('/users',requireAuth, function (req, res) {
      User.find({},(err,users)=>{
        if (err) { return next(err); }
        res.json(users);
      })
  });

  app.get('/user',requireAuth, function (req, res) {
      User.findOne({uname:req.query.uname},(err,user)=>{
        if (err) { return next(err); }
        res.json(user);
      })
  });

  app.put('/user',requireAuth, function (req, res) {
      User.findOne({uname:req.query.uid},(err,user)=>{
        if (err) { return next(err); }
        user.fname=req.query.uname,
        user.lname=req.query.lname,
        user.uname=req.query.uname,
        user.email=req.query.email,
        user.password=req.query.password,
        user.status=req.query.status,
        user.age=req.query.age,
        user.city=req.query.city,
        user.save(function (Err,newuser) {
          if (err) { return next(Err); }
          res.json(newuser);
        });

      })
  });

}
