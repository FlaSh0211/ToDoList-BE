import express from 'express';
import localLogin from '@lib/passport/localLogin';
import jwtCheck from '@lib/passport/jwtCheck';
import { register, unRegister, update } from '@controllers/auth';

// api/auth
const router =  express.Router();

router.get('/', (res)=> {res.send('Hello Exprsess')});
router.post('/login', localLogin.login);
router.post('/register', register);
router.put('/unregister', jwtCheck.jwtCheck, unRegister);
router.put('/update',jwtCheck.jwtCheck, update);

module.exports = router;