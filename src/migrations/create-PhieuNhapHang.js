'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('PhieuNhapHang', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            numb: {
                type: Sequelize.STRING
            },
            NhaCungCapid: {
                type: Sequelize.STRING
            },
            Userid: {
                type: Sequelize.STRING
            },
            MatHangid: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        // await queryInterface.dropTable('Users');
    }
};