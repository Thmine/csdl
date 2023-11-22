import { json } from 'body-parser';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
const { User } = db;

let getDanhSachLenhNhapNoiBo = (req, res) => {
    return res.render('DanhSachLenhNhapNoiBo.ejs');
}

module.exports = {
    getDanhSachLenhNhapNoiBo
}