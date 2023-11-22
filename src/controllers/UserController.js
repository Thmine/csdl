import { json } from 'body-parser';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
const { User } = db;

let getAllAccount = async (req, res) => {
    let data = await CRUDservice.getAllUser()
    return res.render('Display_Users.ejs', { dataUser: data })
}

let getEditUser = async (req, res) => {
    let UserId = req.query.id
    if (UserId) {
        let UserData = await CRUDservice.getuserinfobyid(UserId);
        return res.render('EditUser.ejs', { User: UserData })
    } else {
        return res.send('User not fond')
    }
}


let putUser = async (req, res) => {
    let data = req.body
    let allUsers = await CRUDservice.updateUserdata(data)
    return res.render('Display_Users.ejs', {
        dataUser: allUsers
    })
}

let deleteUser = async (req, res) => {
    let id = req.query.id
    if (id) {
        await CRUDservice.deleteUserbyid(id)
        return res.send('Delete sucess')
    }
    else { return res.send('Dont found user') }
}

let getSignUp = (req, res) => {
    return res.render('sign_up.ejs')
}

let postSignUp = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.redirect('/login')
}

module.exports = {
    getAllAccount,
    getEditUser,
    putUser,
    deleteUser,
    getSignUp,
    postSignUp
}