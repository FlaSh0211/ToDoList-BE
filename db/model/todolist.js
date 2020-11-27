import mongoose from 'mongoose';

const { Schema } = mongoose;

let Todolist = new Schema ({
    email: { type: String },
    content: { type: String },
    date: { type: Date }
})




module.exports = mongoose.model('Todolist', Todolist);