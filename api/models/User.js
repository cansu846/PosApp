

const mongoose = require(mongoose);

const UserSchema = mongoose.Schema(
{
    username: {type: stringify, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}

}, {timeStamp: true}
);

const User = mongoose.model("users",UserSchema);
module.exports = User;
