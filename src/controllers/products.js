const shortID = require('shortid');
const model = require('../models/product');

const listProduct = async (request, response) => {

    const { productID } = request.params;

    let product = await model.findOne({ productID: productID }).catch((e) => console.log(e.message));

    if (product) {

        response.status(200).end(JSON.stringify({
            status: 'success',
            product: product,
        }));

        return;
    }

    response.status(400).end(JSON.stringify({
        status: 'error',
        error: 'product not exist',
    }));
}

const listAllProduct = async (request, response) => {

    let products = await model.find({}).catch((e) => console.log(e.message));

    if (products) {

        response.status(200).end(JSON.stringify({
            status: 'success',
            products: products,
        }));

        return;
    }

    response.status(400).end(JSON.stringify({
        status: 'error',
        error: 'products not exist',
    }));
}

const addProduct = async (request, response) => {

    const { productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryID } = request.body;

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

module.exports = { listProduct, listAllProduct, addProduct };