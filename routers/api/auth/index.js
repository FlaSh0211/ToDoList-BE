import express from 'express';

const router =  express.Router();

router.get('/', (req,res)=> {res.send('Hello Exprsess')});
router.post('/login',()=> {});
router.post('/register', ()=> {});
router.put('/update',()=> {});

module.exports = router;