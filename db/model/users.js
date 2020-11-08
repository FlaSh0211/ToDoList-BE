import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
    name: { type:String },
    studentId:  { Number, unique: true} ,
    email:  { String, unique: true }

});


module.exports = mongoose.model('User',User);