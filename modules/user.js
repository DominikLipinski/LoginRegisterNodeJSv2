var mongoose = require('mongoose');
    bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/loginapp');

var db = mongoose.connection;
    UserSchema = mongoose.Schema({
        username: {
            type: String,
            index: true
        },
        password: {
            type: String 
        },
        email: {
            type: String 
        },
        name: {
            type: String
        }
    });

var User = module.exports = mongoose('User', UserSchema);
