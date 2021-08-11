const mongoose = require('mongoose');

const { createUsersModel } = require('./models/users.js');

function connect(host, port, database) {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://${host}:${port}/${database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', reject);
        db.once('open', function() {
            console.log('Db is ready...')
            const Users = createUsersModel();
            resolve({
                Users
            });
        });
    });
}

module.exports = {
    connect
}