import express from "express";
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import passportStrategy from '@lib/passport/passport';
import passport from 'passport';
import dotenv from 'dotenv'; 
import db from './db';
import routers from './routers'
import cors from 'cors';
import socketIO from 'socket.io';
import { socketController } from './socket';
dotenv.config();

const app = express();
db().connect;

app.use(helmet());
app.use(logger("tiny"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
passportStrategy();
app.use(cors())
app.use('/', routers)
const server = app.listen(process.env.PORT, ()=>{
    console.log(`⛳ Express Server Listening at http://localhost:${process.env.PORT}`)
});
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000",
      }
});
// io.use((socket, next)=> {
//     let token = socket.query.token;
//     if(token) {
//         return next();
//     }
//     return next(new Error('login required'));
// });
io.on('connection', socket => socketController(socket, io))