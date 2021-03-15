import mongoose from 'mongoose';
import users from './users';

const { Schema } = mongoose;

let Todolist = new Schema ({
    email: { type: String },
    content: { type: String },
    date: { type: Date },
    dateString: { type: String },
    type: { type: String }
})

Todolist.statics.create = function({ email, content, date, type }) {
    const todolist = new this({
        email,
        content,
        date,
        dateString: date,
        type
    })
    return todolist.save();
}

Todolist.statics.update = function({ _id, content }) {
    return this.findOne({ _id })
        .then((result)=> {
            result.content = content;
            return result.save();
        })
        .catch((err)=> {
            return err;
        })
}

Todolist.statics.deleteList = function({ _id }) {
    return this.deleteOne({ _id });
}

Todolist.statics.deleteDay = function({ date }) {
    return this.deleteMany({ date })
}

Todolist.statics.get = function({ email }) {
    return this.find({ email }).sort({date:-1})
}
module.exports = mongoose.model('Todolist', Todolist);