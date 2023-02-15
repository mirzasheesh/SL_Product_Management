const shortID = require('shortid');
const model = require('../models/category');

const listCategory = async (request, response) => {

    const { categoryID } = request.params;

    let category = await model.findOne({ categoryID: categoryID }).catch((e) => console.log(e.message));

    if (category) {

        response.status(200).end(JSON.stringify({
            status: 'success',
            categoryName: category.categoryName,
        }));

        return;
    }

    response.status(400).end(JSON.stringify({
        status: 'error',
        error: 'category not exist',
    }));
}

const deleteCategory = async (request, response) => {

    const { categoryID } = request.params;

    await model.deleteOne({ categoryID: categoryID }).catch((e) => console.log(e.message));

    response.status(200).end(JSON.stringify({
        status: 'success',
    }));
}

const listAllCategory = async (request, response) => {

    let categories = await model.find({}).catch((e) => console.log(e.message));

    if (categories) {

        response.status(200).end(JSON.stringify({
            status: 'success',
            categories: categories,
        }));

        return;
    }

    response.status(400).end(JSON.stringify({
        status: 'error',
        error: 'categories not exist',
    }));
}

const addCategory = async (request, response) => {

    const { categoryName } = request.body;

    let newCatergory = {
        categoryID: `${shortID(categoryName)}`,
        categoryName: `${categoryName}`
    };

    await model(newCatergory).save().catch((e) => console.log(e.message));

    response.status(200).end(JSON.stringify({
        status: 'success',
        categoryID: newCatergory.categoryID,
    }))
}

const updateCategory = async (request, response) => {

    const { categoryID } = request.params;

    const { categoryName } = request.body;

    let category = await model.findOneAndUpdate({ categoryID: categoryID }, { categoryName: categoryName }).catch((e) => console.log(e.message));

    if (category) {

        response.status(200).end(JSON.stringify({
            status: 'success',
        }))

        return;
    }

    response.status(400).end(JSON.stringify({
        status: 'error',
        error: 'category not exist',
    }));
}

module.exports = { listCategory, listAllCategory, addCategory, deleteCategory, updateCategory };