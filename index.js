const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-training', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});


sequelize.authenticate()
    .then(() => {
        console.log('Sequelize authenticated successfully.');
    })
    .catch((err) => {
        console.error(err);
    });