let express = require('express');
let passport = require('passport');
let Account = require('../models/account');
let router = express.Router();


router.get('/register', function(req, res) {
    res.render('register', {user: req.user});
});

router.post('/register', function(req, res) {
    // Here I disabled registers !!!
    // res.redirect('/auth/login');
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    let data={"title": "Tracker"};
    res.render('login', { data: data, user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;