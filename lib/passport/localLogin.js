import passport from 'passport';
import jwt from 'jsonwebtoken';

exports.login = passport.authenticate('local', (err, user)=> {
    if (err) { return next(err); }
    if (!user) { 
        return res.redirect('/login'); 
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);