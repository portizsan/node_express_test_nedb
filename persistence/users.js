var Datastore = require('nedb'),
    db = new Datastore({
        filename: '../data/users.db',
        autoload: true
    });


module.exports = {
    getAll: function(callback) {
        db.find({}, function(err, users) {
            if (!err) {
                callback(null, users);
            }
            else {
                callback(err)
            }
        });
    },
    create: function(user, callback) {
        db.insert(user, function(err, u) {
            if (!err) {
                console.log(u._id);
                callback(u);
            }
            else {
                callback(err)
            }
        });
    }

}
