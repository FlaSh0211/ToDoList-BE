import express from 'express';
import jwtCheck from '@lib/passport/jwtCheck';

// api/todolist
const router =  express.Router();

router.get('/', (res)=> {res.send('Hello Exprsess')});
router.post('/create', jwtCheck.jwtCheck, );
router.post('/deleteDay', jwtCheck.jwtCheck, );
router.put('/deleteOne', jwtCheck.jwtCheck, );
router.put('/update',jwtCheck.jwtCheck, );

module.exports = router;