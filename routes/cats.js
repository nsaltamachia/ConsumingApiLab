var express = require('express');
var router = express.Router();
const catsCtrl = require("../controllers/cats")


/* GET users listing. */
router.get('/fact', catsCtrl.fact);

router.get("/facts", catsCtrl.facts);




module.exports = router;
