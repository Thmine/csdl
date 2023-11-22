import db from '../models/index';


let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                username: data.username,
                password: data.password,
                role: data.roleid
            })
            resolve('create new user sucsess')
        } catch (e) {
            reject(e);
        }
    }
    )
}

let getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let getuserinfobyid = (UserId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: UserId },
                raw: true,
            })
            if (user) {
                resolve(user)
            } else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateUserdata = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.username = data.username
                user.password = data.password
                await user.save()
                let allUsers = await db.User.findAll()
                resolve(allUsers)
            } else {
                resolve()
            }
        }
        catch (e) {
            console.log(e)
        }
    })
}

let deleteUserbyid = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userid }
            })
            if (user) {
                await user.destroy()
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}


//sanpham
let addProduct = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.MatHang.create({
                name: data.name,
                numb: data.numb,
                KhoHangid: data.KhoHangid,
                nhom_hang: data.nhom_hang,
                cost: data.cost
            })
            resolve();
        } catch (e) {
            reject(e)
        }
    })
        .catch(error => {
            console.error('lỗi', error);
        })
}

let getAllProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.MatHang.findAll({
                raw: true,
            });
            resolve(products)
        } catch (e) {
            reject(e);
        }
    })
}


let getProductInfoById = (ProductId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Product = await db.MatHang.findOne({
                where: { id: ProductId },
            })

            if (Product) {
                resolve(Product)
            }
            else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateProductData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Product = await db.MatHang.findOne({
                where: { id: data.id }
            })
            if (Product) {
                Product.id = data.id;
                Product.name = data.name;
                Product.KhoHangid = data.KhoHangid;
                Product.nhom_hang = data.nhom_hang;
                Product.numb = data.numb;
                Product.cost = data.cost;

                await Product.save();

                let AllProducts = await db.MatHang.findAll();
                resolve(AllProducts);
            } else {
                resolve();
            }
        } catch (e) {
            console.log(e);
        }
    }).catch(error => {
        console.log('lỗi', error);
    })
}

let deleteProductById = async (ProductId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Product = await db.MatHang.findOne({
                where: { id: ProductId }
            })

            if (Product) {
                await Product.destroy();
            }
            let AllProducts = await db.MatHang.findAll();
            resolve(AllProducts);
        } catch (e) {
            reject(e);
        }
    }).catch(error => {
        console.log('lỗi', error);
    })
}




//phieunhapkho




module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getuserinfobyid: getuserinfobyid,
    updateUserdata: updateUserdata,
    deleteUserbyid: deleteUserbyid,

    addProduct: addProduct,
    getAllProducts: getAllProducts,
    getProductInfoById: getProductInfoById,
    updateProductData: updateProductData,
    deleteProductById: deleteProductById,


}