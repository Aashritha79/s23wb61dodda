// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('airlines', { title: 'Search Results airlines' });
// });

// module.exports = router;

var express = require('express');
const costume_controlers= require('../controllers/airlines');
var router = express.Router();
/* GET costumes */
router.get('/', costume_controlers.airlines_view_all_Page );
module.exports = router;