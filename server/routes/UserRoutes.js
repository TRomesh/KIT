const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  app.get('/user',requireAuth, function (req, res) {
    res.send({ hi: 'there' });
  });

  app.put('/user', function (req, res) {
    res.send({ hi: 'there' });
  });

}
