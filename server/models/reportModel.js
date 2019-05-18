const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const report = sequelize.define('report', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true   
    }, 
    author: {
        type: Sequelize.STRING(50), 
        allowNull: false
    }, 
    title: {type: Sequelize.STRING}, 
    description: { 
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    incident_type: {
        type: Sequelize.STRING,
        allowNull: false, 
        get() {
            return this.getDataValue('incident_type').split(';')
        }, 
        set(val) {
            this.setDataValue('favColors',val.join(';'));
        }
    },
    incident_severity: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); 

module.exports = report