import express from 'express';
import passport from 'passport';
import localLogin from '@lib/passport/localLogin';
import jwtCheck from '@lib/passport/jwtCheck';
import { register, unRegister } from '@controllers';

// api/auth
const router =  express.Router();

router.get('/', (req,res)=> {res.send('Hello Exprsess')});
router.post('/login', localLogin.login);
router.post('/register', register);
router.put('/unregister', jwtCheck.jwtCheck , unRegister);

router.put('/update', passport.authenticate('jwt', { session: false }), );

module.exports = router;