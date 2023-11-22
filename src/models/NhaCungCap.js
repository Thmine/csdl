'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class NhaCungCap extends Model {
        static associate(models) {
        }
    };
    NhaCungCap.init({
        name: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'NhaCungCap',
        timestamps: false
    });
    return NhaCungCap;
};