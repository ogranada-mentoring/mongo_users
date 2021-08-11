
const express = require('express');


function getHomeRouter(models) {

    const router = express.Router();
    router.get('/', (req, resp) => {
        resp.send('Hola');
    });


    router.get('/users', async (req, res) => {
        const data = await models.Users.find({});
        res.json(data);
    });


    router.get('/users/:id', async (req, res) => {
        const data = await models.Users.findOne({
            _id: req.params.id
        });
        res.json(data);
    });

    router.post('/users/', async (req, res) => {
        const data = req.body;
        const result = await models.Users.create(data);
        res.json(result);
    });


    return router;
}

module.exports = {
    getHomeRouter
}
