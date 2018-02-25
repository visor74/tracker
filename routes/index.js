let express = require('express');
//  let passport = require('passport');
let router = express.Router();
let helpers = require('../lib/helpers');
let parcelController = require('../lib/parcelController');

/* GET home page. */
router.get('/', helpers.ensureAuthenticated, function(req, res) {
    res.render('index', { title: 'Tracker', user : req.user});
});

router.get('/parcel/add', parcelController.getCreateParcel);
router.post('/parcel/add', parcelController.postCreateParcel);

module.exports = router;
