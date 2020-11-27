import mongoose from 'mongoose';

const { Schema } = mongoose;

let User = new Schema({
    password: { type: String },
    nickname: { type: String, unique: true },
    email: { type: String, unique: true }

});

User.statics.register = function({ email, nickname, password }) {
    const user = new this({
        email,
        nickname,
        password
    });
    return user.save();
}

User.statics.update = function({ email, nickname, password }) {
    this.findOne({ email })
        .then((user)=> {
            user.nickname = nickname;
            user.password = password;
            return user.save();
        })
        .catch(()=> {
            return false
        });
}

User.statics.unRegister = function({ email }) {
    return this.remove({ email });
}

export default mongoose.model('User',User);