const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const Thread = require('../models/thread.model');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  app.get('/thread', requireAuth, function (req, res) {
      Thread.findOne({},(err,thread)=>{
        if (err) { return next(err); }
        res.json(thread);
      })
  });

  app.post('/thread', requireAuth, function (req, res) {
      Thread.save({},(err,thread)=>{
        if (err) { return next(err); }
        res.json(thread);
      })
  });

  app.delete('/thread', requireAuth, function (req, res) {
    res.send({ hi: 'there' });
  });

  app.get('/threads', requireAuth, function (req, res) {
      Thread.find({},(err,threads)=>{
        if (err) { return next(err); }
        res.json(threads);
      })
  });



}
