const mongoose  = require('mongoose');

const UserScheema  = new mongoose.Scheema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        profileImageUrl: {type: String,  default: null},
        role: {type: String, enum: ['member', 'admin'], default: 'member'},
    }, {timestamps: true}
);

module.exports = mongoose.model('User', UserScheema);