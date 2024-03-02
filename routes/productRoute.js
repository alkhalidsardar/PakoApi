//create express router instance , and product

const express = require("express");
const product = require("../controllers/product");
const router = express.Router();

//set route for your product function
router.route("/").get(product)

//export your route
module.exports = router;