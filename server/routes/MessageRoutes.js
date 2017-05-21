const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  app.get('/messages', function (req, res) {
    res.send({ hi: 'there' });
  });

  app.delete('/messages', function (req, res) {
    res.send({ hi: 'there' });
  });

}
