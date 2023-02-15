const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryID: {
        type: String,
        unique: true,
    },
    categoryName: {
        type: String,
    },
});

const collection = "categories";

const categoryModel = mongoose.model(collection, categorySchema);

module.exports = categoryModel;