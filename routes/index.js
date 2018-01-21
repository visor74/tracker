let express = require('express');
let passport = require('passport');
let router = express.Router();
let helpers = require('../lib/helpers');

/* GET home page. */
router.get('/', helpers.ensureAuthenticated, function(req, res, next) {
    res.render('index', { title: 'Tracker', user : req.user});
});

module.exports = router;
