import express from 'express';
import auth from './auth';
import todolist from './todolist';

const router =  express.Router();
router.use('/auth', auth);
router.use('/todolist', todolist);

module.exports = router;
