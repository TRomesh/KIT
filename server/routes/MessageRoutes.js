const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const Message = require('../models/message.model');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  app.get('/messages', requireAuth, function (req, res) {
      Message.find({},(err,messages)=>{
        if (err) { return next(err); }
        res.json(messages);
      })
  });

  app.delete('/messages', function (req, res) {
    res.send({ hi: 'there' });
  });

}
