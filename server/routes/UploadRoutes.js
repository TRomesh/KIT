const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const passport = require('passport');
const multer = require('multer');

const requireAuth = passport.authenticate('jwt', { session: false });

const storage = multer.diskStorage({
  destination: '../media',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = function (app) {

  app.post('/file', [requireAuth,upload.single('file')], function(req, res) {
    var file = __dirname + '/' + req.file.filename;
    fs.rename(req.file.path, file, function(err) {
      if (err) {
        console.log(err);
        res.send(500);
      } else {
        res.json({
          message: 'File uploaded successfully',
          filename: req.file.filename
        });
      }
    });
  });

  app.get('/file',requireAuth, function (req, res) {
    res.send({ hi: 'there' });
  });

  app.put('/file', function (req, res) {
    res.send({ hi: 'there' });
  });

}
