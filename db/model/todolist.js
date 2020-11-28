import mongoose from 'mongoose';
import users from './users';

const { Schema } = mongoose;

let Todolist = new Schema ({
    email: { type: String },
    content: { type: String },
    date: { type: Date },
    dateString: { type: String }
})

Todolist.statics.create = function({ email, content, date }) {
    const todolist = new this({
        email,
        content,
        date,
        dateString: date
    })
    return todolist.save();
}

Todolist.statics.update = function({ _id, content }) {
    return new Promise((resolve, reject)=> {
        User.findOne({ _id }).exec()
        .then((result)=> {
            result.content = content;
            resolve(result.save());
        })
        .catch((err)=> {
            reject(err);
        })
    })
}

Todolist.statics.deleteList = function({ _id }) {
    return User.deleteOne({ _id });
}

Todolist.statics.deleteDay = function({ date }) {
    return User.deleteMany({ date })
}

Todolist.statics.get = function({ email }) {
    return User.find({ email }).sort({date:-1}).sort({date:-1})
}
module.exports = mongoose.model('Todolist', Todolist);