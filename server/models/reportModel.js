const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const report = sequelize.define('report', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(50)
    },
    author: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    incident_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    incident_severity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner_tel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner_add: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_4: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_5: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_6: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_7: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_8: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_9: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_10: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_11: {
        type: Sequelize.STRING,
        allowNull: false
    },
    action: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = report