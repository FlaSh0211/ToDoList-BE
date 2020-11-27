import passport from 'passport';
import LocalStrategy from 'passport-local';
import passportJWT from 'passport-jwt';
import dotenv from 'dotenv';
import User from '@db/model/users';
LocalStrategy.Strategy;
dotenv.config();

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt =  passportJWT.ExtractJwt;

module.exports = ()=> {
    passport.use(new LocalStrategy ({
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done)=> {
            User.findOne({ email }, function (err, user) {
                if (err) { 
                    return done(err); 
                }
                if (!user) {
                    return done(null, "email");
                }
                if (user.password !== password) {
                    return done(null, "pw");
                }
                return done(null, user);
            });
          }
        )
    ),
      
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.TOKEN_SECRET
    }, 
        (jwt_payload, done)=> {
            User.findOne({ email: jwt_payload.email }, function(err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        })
    );
};
