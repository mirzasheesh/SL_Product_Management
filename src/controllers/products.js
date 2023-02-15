const shortID = require('shortid');
const model = require('../models/product');
const categoryModel = require('../models/category');

const addProduct = async (request, response) => {

    const { productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryID } = request.body;

    let validCategory = await categoryModel.findOne({ categoryID: categoryID });

    if (!validCategory) {

        response.status(400).end(JSON.stringify({
            status: 'error',
            error: 'categoryID is not valid'
        }));

        return;
    }

    let newProduct = {
        productID: `${shortID(productName)}`,
        productName: `${productName}`,
        qtyPerUnit: qtyPerUnit,
        unitPrice: unitPrice,
        unitInStock: unitInStock,
        discontinued: discontinued,
        categoryID: categoryID,
    };

    await model(newProduct).save().catch((e) => console.log(e.message));

    response.status(200).end(JSON.stringify({
        status: 'success',
        productID: newProduct.productID,
    }))
}

module.exports = { addProduct };