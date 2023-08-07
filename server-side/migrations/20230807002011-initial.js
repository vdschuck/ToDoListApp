'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
