'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('PhieuXuatHang', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            KhachHangid: {
                type: Sequelize.STRING
            },
            MatHangid: {
                type: Sequelize.STRING
            },
            Userid: {
                type: Sequelize.STRING
            },
            numb: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        // await queryInterface.dropTable('Users');
    }
};