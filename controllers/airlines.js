var Airlines = require('../models/airlines');
// List of all Airlines
exports.airlines_list = async function(req, res) {
    try{
    theCostumes = await Airlines.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.airlines_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Airlines.find();
    res.render('airlines', { title: 'Airlines Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Airlines.
exports.airlines_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines detail: ' + req.params.id);
};
// Handle Airlines create on POST.
exports.airlines_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines create POST');
};

// Handle Costume create on POST.
exports.airlines_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Airlines();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.airlines_name = req.body.airlines_name;
    document.airlines_seating = req.body.airlines_seating;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Airlines delete form on DELETE.
exports.airlines_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines delete DELETE ' + req.params.id);
};
// Handle Airlines update form on PUT.
exports.airlines_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines update PUT' + req.params.id);
};