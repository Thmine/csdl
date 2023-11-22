'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class KhachHang extends Model {
        static associate(models) {
        }
    };
    KhachHang.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'KhachHang',
        timestamps: false
    });
    return KhachHang;
};