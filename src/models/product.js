const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productID: {
        type: String,
        unique: true,
    },
    productName: {
        type: String,
    },
    qtyPerUnit: {
        type: Number,
        default: 0,
    },
    unitPrice: {
        type: Number,
        default: 0,
    },
    unitInStock: {
        type: Number,
        default: 0,
    },
    discontinued: {
        type: Boolean,
        default: true,
    },
    categoryID: {
        type: String,
    },
});

const collection = "products";

const productModel = mongoose.model(collection, productSchema);

module.exports = productModel;