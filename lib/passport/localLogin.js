import passport from 'passport';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

exports.login = (req, res)=> {
    passport.authenticate('local', (err, user)=> {
        if (err) { 
            return res.json({
                data: null,
                message: err.message,
                error: 1000,
            }); 
        }
        if (!user) { 
            return res.json({
                data: null,
                message: 'user not found',
                error: 1001,
            }); 
        }
        req.logIn(user, { session: false }, function(err) {
            try {
                if (err) { 
                    return res.json({
                        data: null,
                        message: err.message,
                        error: 1002,
                    }); 
                }
                const date = new Date();
                const token = jwt.sign({ user: user.toJSON(), date: date.toJSON() }, process.env.TOKEN_SECRET);
                return res.json({
                    data: { email: user.email, nickname: user.nickname },
                    message: 'login success',
                    token: token
                });
            }
            catch (err) {
                res.json({
                    data: null,
                    message: err.message,
                    err: 1003
                })
            }
        });
    })(req, res);
}
