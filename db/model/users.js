import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
    name: { type:String },
    studentId: { Number },
    email: { String }

});


module.exports = mongoose.model('User',User);