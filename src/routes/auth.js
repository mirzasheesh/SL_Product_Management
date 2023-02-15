const express = require('express');
const router = express.Router();

const { listCategory, listAllCategory, addCategory } = require('../controllers/category'); // Category Model
const { listProduct, listAllProduct, addProduct } = require('../controllers/products'); // Product Model

/* Categories */

router.get('/category/all', listAllCategory); // List Categories
router.get('/category/:categoryID', listCategory); // Get Category
router.post('/category', addCategory); // Add New Category

/* Products */

router.get('/product/all', listAllProduct); // List Products
router.get('/product/:productID', listProduct); // Get Product
router.post('/product', addProduct); // Add New Product

module.exports = router;