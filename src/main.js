const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const { getHomeRouter } = require('./controller/routers/home');
const { connect } = require('./model');


function middleware1(req, resp, next) {
    //sadhjfjkhsdfkhjsdf
    resp.status(500).send('No funciono')
}



async function main() {
    dotenv.config();
    const server = express();
    server.use(helmet());
    server.use(express.json());
    server.use(express.urlencoded({extended: false}));
    server.set('views', 'src/views')
    server.set('view engine', 'pug');

    const {
        DB_HOST,
        DB_PORT,
        DB_NAME,
    } = global.process.env;

    const models = await connect(DB_HOST, DB_PORT, DB_NAME);

    server.use(getHomeRouter(models));

    server.listen(9090, () => {
        console.log('Server is ready');
    })
}


main();

