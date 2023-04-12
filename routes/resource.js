var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/airlines');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/airlines', costume_controller.airlines_create_post);
// DELETE request to delete Costume.
router.delete('/airlines/:id', costume_controller.airlines_delete);
// PUT request to update Costume.
router.put('/airlines/:id', costume_controller.airlines_update_put);
// GET request for one Costume.
router.get('/airlines/:id', costume_controller.airlines_detail);
// GET request for list of all Costume items.
router.get('/airlines', costume_controller.airlines_list);
module.exports = router;