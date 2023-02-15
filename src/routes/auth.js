const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {

    response.status(200).end(JSON.stringify({
        status: 'active',
    }));
});

module.exports = router;