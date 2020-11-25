import express from "express";
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import passportStrategy from 'lib/passport';
import passport from 'passport';
import dotenv from 'dotenv'; 
import db from './db';
import routers from './routers'

dotenv.config();

const app = express();
app.use(helmet());
app.use(logger("tiny"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
db().connect;
app.use(passport.initialize());

app.use('/', routers)
app.listen(process.env.PORT, ()=>{
    console.log(`⛳ Express Server Listening at http://localhost:${process.env.PORT}`)
});


