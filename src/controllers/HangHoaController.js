import { json } from 'body-parser';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
const { User } = db;

let postThemHangHoa = async (req, res) => {
    let message = await CRUDservice.addProduct(req.body);
    console.log(message);
    try {
        let data = await CRUDservice.getAllProducts();
        console.log(data);
        return res.render('DanhMucHangHoa.ejs', {
            dataTable: data,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}

let getDanhMucHangHoa = async (req, res) => {
    try {
        let data = await CRUDservice.getAllProducts();
        console.log(data);
        return res.render('DanhMucHangHoa.ejs', {
            dataTable: data,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}

let getThemHangHoa = async (req, res) => {
    try {
        let data = await CRUDservice.getAllProducts();
        console.log(data);
        return res.render('ThemHangHoa.ejs', {
            dataTable: data,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}

let getChinhSuaHangHoa = async (req, res) => {
    let ProductId = req.query.id;
    if (ProductId) {
        let ProductData = await CRUDservice.getProductInfoById(ProductId);
        console.log(ProductData);

        return res.render('ChinhSuaHangHoa.ejs', {
            Product: ProductData
        });
    } else {
        return res.send('Not Exist');
    }
}

let putProductInfo = async (req, res) => {
    let data = req.body;
    let AllProducts = await CRUDservice.updateProductData(data);
    return res.render('DanhMucHangHoa.ejs', {
        dataTable: AllProducts
    })
}

let xoaHangHoa = async (req, res) => {
    let id = req.query.id;
    let AllProducts = await CRUDservice.deleteProductById(id);
    return res.render('DanhMucHangHoa.ejs', {
        dataTable: AllProducts
    })
}



module.exports = {
    postThemHangHoa,
    getChinhSuaHangHoa,
    getDanhMucHangHoa,
    getThemHangHoa,
    putProductInfo,
    xoaHangHoa,

}