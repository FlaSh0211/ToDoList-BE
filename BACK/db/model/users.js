import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('User',userSchema);