let express = require('express');
// let passport = require('passport');
let router = express.Router();
let helpers = require('../lib/helpers');
let parcelController = require('../lib/parcel_controller');

/* GET home page. */
router.get('/', helpers.ensureAuthenticated, function(req, res) {
    res.render('index', { title: 'Tracker', user : req.user});
});

router.get('/parcel/create', parcelController.getCreateParcel());

module.exports = router;
