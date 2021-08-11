const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:  String, // String is shorthand for {type: String}
    firstName:  String, // String is shorthand for {type: String}
    lastName: String,
    password: String,
    roles: [
        String
    ]
});

function createUsersModel() {
    const User = mongoose.model('User', userSchema);
    return User;
}

module.exports = {
    createUsersModel
}
