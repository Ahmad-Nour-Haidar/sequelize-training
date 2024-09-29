const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-training', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});


// sequelize.authenticate()
//     .then(() => {
//         console.log('Sequelize authenticated successfully.');
//     })
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     });

const User = sequelize.define('User', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21,
    }
});

User.sync()
    .then(() => {
        console.log('User successfully created!');
    }).catch(err => {
    console.log('User failed with error: ' + err)
});

