const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    usn: { type: String, required: true, unique: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /.+\@.+\..+/ 
    },
    password: { type: String, required: true },
});
module.exports = mongoose.model('User', UserSchema);
