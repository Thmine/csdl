'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PhieuXuatHang extends Model {
        static associate(models) {
        }
    };
    PhieuXuatHang.init({
        KhachHangid: DataTypes.STRING,
        MatHangid: DataTypes.STRING,
        Userid: DataTypes.STRING,
        numb: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PhieuXuatHang',
    });
    return PhieuXuatHang;
};