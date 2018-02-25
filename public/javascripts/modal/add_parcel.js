jQuery(function($) {
    $("#btn-add-parcel").click(function() {
        var form = $("#f-add-parcel");
        var data = form.serializeArray();
        console.log("I am about to POST this:\n" + JSON.stringify(data));
        $.post( form.attr("action"), data, function(data) {
            console.log("Response: " + data);
        });
    });
});