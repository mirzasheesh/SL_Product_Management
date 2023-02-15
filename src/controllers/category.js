const shortID = require('shortid');
const model = require('../models/category');

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

module.exports = { addCategory };