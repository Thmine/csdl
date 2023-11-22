'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MatHang extends Model {
        static associate(models) {
        }
    };
    MatHang.init({
        name: DataTypes.STRING,
        numb: DataTypes.STRING,
        KhoHangid: DataTypes.STRING,
        nhom_hang: DataTypes.STRING,
        cost: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'MatHang',
        timestamps: false
    });
    return MatHang;
};