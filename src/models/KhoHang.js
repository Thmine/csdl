'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class KhoHang extends Model {
        static associate(models) {
        }
    };
    KhoHang.init({
        capi: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'KhoHang',
        timestamps: false
    });
    return KhoHang;
};