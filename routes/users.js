var express = require('express');
var router  = express.Router();

// register (view)
router.get('/register', function(req, res) {
    res.render('register');
});

// login
router.get('/login', function(req, res) {
    res.render('login');
});

// register (post)
router.post('/register', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    
    // validation
    req.checkBody('name', 'Name is required').notEmpty();
});

module.exports = router;