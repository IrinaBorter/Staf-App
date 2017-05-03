const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./User');
const bCrypt = require('bcrypt-nodejs');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    User.findOne({
      'username': username
    }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        console.log('User Not Found with username ' + username);
        return done(null, false);
      }

      if (!isValidPassword(user, password)) {
        console.log('Invalid Password');
        return done(null, false);
      }

      return done(null, user);
    });
  }));

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    process.nextTick(findOrCreateUser);

    function findOrCreateUser() {
      User.findOne({ 'username': username }, (err, user) => {
        if (err) {
          console.log('Error in SignUp: ' + err);
          return done(err);
        }

        if (user) {
          console.log('User already exists');
          return done(null, false);
        } else {
          let newUser = new User();
          
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = req.param('email');
          newUser.firstName = req.param('firstName');
          newUser.lastName = req.param('lastName');

          newUser.save(function (err) {
            if (err) {
              console.log('Error in Saving user: ' + err);
              throw err;
            }
            console.log('User Registration succesful');
            return done(null, newUser);
          });
        }

      });
    };
  }));

function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
}

function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

module.exports = passport;