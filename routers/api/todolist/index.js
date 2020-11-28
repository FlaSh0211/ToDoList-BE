import express from 'express';
import jwtCheck from '@lib/passport/jwtCheck';
import { create, update, deleteDay, deleteList, get } from '@controllers/todolist'
// api/todolist
const router =  express.Router();

router.get('/', (res)=> {res.send('Hello Exprsess')});
router.post('/create', jwtCheck.jwtCheck, create);
router.put('/deleteDay', jwtCheck.jwtCheck, deleteDay);
router.put('/deleteList', jwtCheck.jwtCheck, deleteList);
router.put('/update',jwtCheck.jwtCheck, update);
router.get('/get',jwtCheck.jwtCheck, get);

module.exports = router;