var express = require('express');
var router = express.Router();
var usersPersistence = require('../persistence/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    usersPersistence.getAll(function (error, result) {
            if (!error) {
                res.json(result);
            } else {
                next(error);
            }
        });
});

router.post('/', function(req, res, next) {
        var userReq = req.body;
        console.log(req);
        usersPersistence.create(userReq,  function (error, result) {
            if (!error) {
                res.json(result);
            } else {
                console.log(error)
                next(error);
            }
        });
});

module.exports = router;
