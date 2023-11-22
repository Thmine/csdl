import { json } from 'body-parser';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
const { User } = db;

let getKhoHang = (req, res) => {
    return res.render('khohang.ejs');
}

let getNguonHangXuatNhap = (req, res) => {
    return res.render('NguonHangXuatNhap.ejs');
}
let getPhieuNhapKho = (req, res) => {
    return res.render('PhieuNhapKho.ejs');
}

let getTaoLenhNhap = (req, res) => {
    return res.render('taoLenhNhap.ejs');
}

let getTaoPhieuNhap = (req, res) => {
    return res.render('taoPhieuNhap.ejs');
}
let getDanhSachPhieuXuat = (req, res) => {
    return res.render('DanhSachPhieuXuat.ejs');
}

let getPhieuXuatKho = (req, res) => {
    return res.render('PhieuXuatKho.ejs');
}

let getTaoLenhXuat = (req, res) => {
    return res.render('taoLenhXuat.ejs');
}

let getTaoPhieuXuat = (req, res) => {
    return res.render('taoPhieuXuat.ejs');
}

//phieunhap


module.exports = {
    getNguonHangXuatNhap,
    getKhoHang,
    getPhieuNhapKho,
    getTaoLenhNhap,
    getTaoPhieuNhap,
    getDanhSachPhieuXuat,
    getPhieuXuatKho,
    getTaoLenhXuat,
    getPhieuXuatKho,
    getTaoPhieuXuat,


}