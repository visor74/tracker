module.exports.getCreateParcel = function(req, res) {
    // console.log(req.param("tag"));
    // console.log(req.param("track_number"));
    return res.redirect("/");
};

module.exports.postCreateParcel = function(req, res) {
    if (req.body.track) {
        //TODO add user input validation
        console.log(req.body.track);
        console.log(req.body.parcel);

    }
    return res.redirect("/");
};
