const { sequelize, DataTypes, Sequelize } = require('../../config/database');

const tasksModel = sequelize.define('tasks', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
	status: {
		type: DataTypes.STRING(45),
		allowNull: false
	},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

module.exports = tasksModel
