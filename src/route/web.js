import express from "express";
import homeController from "../controllers/homeController";
import HangHoaController from "../controllers/HangHoaController";
import KhoController from "../controllers/KhoController";
import UserController from "../controllers/UserController";
import dslnbController from "../controllers/dslnbController";
let router = express.Router();

let initWebRoutes = (app) => {

    // Login routes
    router.get('/login', homeController.getLogin);
    router.post('/login', homeController.postLogin);
    // router.post('/login', homeController.checkLogin);
    router.get('/home', homeController.getHomePage);
    // Logout routehome
    router.get('/logout', homeController.logout);

    //qly hang hoa
    router.get('/DanhMucHangHoa', HangHoaController.getDanhMucHangHoa);
    router.get('/DanhSachLenhNhapNoiBo', dslnbController.getDanhSachLenhNhapNoiBo);
    router.get('/DanhSachPhieuXuat', KhoController.getDanhSachPhieuXuat);

    // router.get('/home', homeController.gethome);
    router.get('/khohang', KhoController.getKhoHang);
    router.get('/NguonHangXuatNhap', KhoController.getNguonHangXuatNhap);
    router.get('/PhieuNhapKho', KhoController.getPhieuNhapKho);
    router.get('/PhieuXuatKho', KhoController.getPhieuXuatKho);
    router.get('/taoLenhNhap', KhoController.getTaoLenhNhap);
    router.get('/taoLenhXuat', KhoController.getTaoLenhXuat);
    router.get('/taoPhieuNhap', KhoController.getTaoPhieuNhap);
    router.get('/taoPhieuXuat', KhoController.getTaoPhieuXuat);
    router.get('/ThemHangHoa', HangHoaController.getThemHangHoa);

    //qlyUser
    router.get('/sign_up', UserController.getSignUp);
    router.post('/postsign_up', UserController.postSignUp);
    router.get('/getallaccount', UserController.getAllAccount);
    router.get('/edit_User', UserController.getEditUser);
    router.post('/putUser', UserController.putUser);
    router.get('/delete_User', UserController.deleteUser);


    //qlyhanghoa

    router.get('/ChinhSuaHangHoa', HangHoaController.getChinhSuaHangHoa);
    router.get('/XoaHangHoa', HangHoaController.xoaHangHoa);
    router.post('/postThemHangHoa', HangHoaController.postThemHangHoa);
    router.post('/putProductInfo', HangHoaController.putProductInfo);

    //phieunhaphang


    return app.use("/", router);
}


module.exports = initWebRoutes;