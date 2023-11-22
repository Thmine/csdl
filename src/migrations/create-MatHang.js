'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('MatHang', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            numb: {
                type: Sequelize.STRING
            },
            KhoHangid: {
                type: Sequelize.STRING
            },
            nhom_hang: {
                type: Sequelize.STRING
            },
            cost: {
                type: Sequelize.STRING
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        // await queryInterface.dropTable('Users');
    }
};