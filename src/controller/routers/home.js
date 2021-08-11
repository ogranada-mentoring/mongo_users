
const express = require('express');


function getHomeRouter(models) {

    const router = express.Router();
    router.get('/', (req, resp) => {
        resp.render('index', {
            title: 'Hola Mundo',
            message: 'Hola Mundo!'
        });
    });


    router.get('/users', async (req, res) => {
        const data = await models.Users.find({});
        res.json(data);
    });


    return router;
}

module.exports = {
    getHomeRouter
}
