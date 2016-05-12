var connect = require('camo').connect;
var userSchema = require('../schema/user');

var database;
var uri = 'nedb://../data/users';
connect(uri).then(function(db) {
    database = db;
});

module.exports = {
    getAll: function(callback) {
        userSchema.find({}, {
            populate: true
        }).then(function(users) {
            callback(null, users);
        });
    },
    create: function(user, callback) {
        var newUser = userSchema.create(user);
        newUser.save().then(function(u) {
            console.log(u._id);
            callback(u);
        });
    }

}
