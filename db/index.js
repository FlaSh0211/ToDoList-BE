
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();

module.exports = ()=> {
   return {
        connect : 
        mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
        .then(
            ()=> {console.log(`⛳ mongodb is connected`)},
            err => {console.log(err)}
        )
    }
}
