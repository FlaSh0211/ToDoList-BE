import passport from 'passport';

exports.jwtCheck = (req, res, next)=> {
    passport.authenticate('jwt', { session: false }, (err,user)=> {
        if(err){
            return;
        }
        else {
            req.body.user = user;
            next();
        }
    })(req,res,next)
}