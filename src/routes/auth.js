const express = require('express');
const router = express.Router();

const { listCategory, addCategory } = require('../controllers/category'); // Category Model
const { listProduct, addProduct } = require('../controllers/products'); // Product Model

/* Categories */

router.get('/category/:categoryID', listCategory); // Get Category
router.post('/category', addCategory); // Add New Category

/* Products */

router.get('/product/:productID', listProduct); // Get Product
router.post('/product', addProduct); // Add New Product

module.exports = router;