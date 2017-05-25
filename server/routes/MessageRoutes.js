const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const Chat = require('../models/chat.model');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  app.get('/messages', requireAuth, function (req, res) {
      Chat.find({},(err,chats)=>{
        if (err) { return next(err); }
        res.json(chats);
      })
  });

  app.delete('/messages', function (req, res) {
    res.send({ hi: 'there' });
  });

}
