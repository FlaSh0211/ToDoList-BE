import passport from 'passport';
import LocalStrategy from 'passport-local';
import passportJWT from 'passport-jwt';
LocalStrategy.Strategy;

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt =  passportJWT.ExtractJwt;

modeule.exports = ()=> (
    passport.use(new LocalStrategy (
        (username, password, done)=> {
          User.findOne({ username: username }, function (err, user) {
              if (err) { return done(err); }
              if (!user) {
                  return done(null, false, { message: 'Incorrect username.' });
              }
              if (!user.validPassword(password)) {
                  return done(null, false, { message: 'Incorrect password.' });
              }
              return done(null, user);
              });
          }
      ));
      
      passport.use(new JwtStrategy({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: 'secret'
      }, (jwt_payload, done)=> {
          User.findOne({id: jwt_payload.sub}, function(err, user) {
              if (err) {
                  return done(err, false);
              }
              if (user) {
                  return done(null, user);
              } else {
                  return done(null, false);
                  // or you could create a new account
              }
          });
      }));
)
