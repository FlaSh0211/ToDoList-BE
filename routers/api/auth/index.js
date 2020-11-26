import express from 'express';
import passport from 'passport';
import localLogin from '@lib/passport/localLogin';
import { register } from '@controllers';
// api/auth
const router =  express.Router();

router.get('/', (req,res)=> {res.send('Hello Exprsess')});
router.post('/login', localLogin.login);
router.post('/register', register);
router.put('/update', passport.authenticate('basic', { session: false }), ()=> {});

module.exports = router;