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
        if (user) {
            if(user === "email") {
                return res.json({
                    data: null,
                    message: 'invalid email',
                    error: 1001,
                });
            }
            else {
                return res.json({
                    data: null,
                    message: 'invalid password',
                    error: 1002,
                });
            } 
        }
        req.logIn(user, { session: false }, function(err) {
            try {
                if (err) { 
                    return res.json({
                        data: null,
                        message: err.message,
                        error: 1003,
                    }); 
                }
                const date = new Date();
                const token = jwt.sign({ email: user.toJSON(), date: date.toJSON() }, process.env.TOKEN_SECRET);
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
                    err: 1004
                })
            }
        });
    })(req, res);
}
