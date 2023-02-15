const express = require('express');
const router = express.Router();

const { addCategory } = require('../controllers/category'); // Category Model
const { addProduct } = require('../controllers/products'); // Product Model

/* Categories */

router.post('/category', addCategory); // Add New Product

/* Products */

router.post('/product', addProduct); // Add New Category

module.exports = router;