const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    tasks: { type: [String], required: true },
    inputValue: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel