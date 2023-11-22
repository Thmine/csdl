'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PhieuNhapHang extends Model {
        static associate(models) {
        }
    };
    PhieuNhapHang.init({
        numb: DataTypes.STRING,
        NhaCungCapid: DataTypes.STRING,
        Userid: DataTypes.STRING,
        MatHangid: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PhieuNhapHang',
    });
    return PhieuNhapHang;
};