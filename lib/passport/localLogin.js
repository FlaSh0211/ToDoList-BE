import passport from 'passport';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

exports.login = ()=> {
    passport.authenticate('local', (err, user)=> {
        if (err) { 
            return next(err); 
        }
        if (!user) { 
            return res.json({
                data: null,
                message: 'user not found',
                error: 1000,
            }); 
        }
        req.logIn(user, function(err) {
            if (err) { 
                return next(err); 
            }
            const date = new Date();
            const token = jwt.sign({ email: user.email }, date.toJSON(), process.env.TOKEN_SECRET, { expiresIn: '1h' });
            return res.json({
                data: { email: user.email, nickname: user.nickname },
                message: 'login success',
                token: token
            });
        });
    })(req, res, next);
}
