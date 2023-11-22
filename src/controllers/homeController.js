import { json } from 'body-parser';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
const { User } = db;
let getHomePage = async (req, res) => {
    // const { username, password } = req.session.user;
    return res.render('home.ejs', { username: req.session.user.username })
    // try {
    //     let data = await db.User.findAll()
    //     return res.render('homepage.ejs', { data: JSON.stringify(data) })
    // }
    // catch (e) {
    //     console.log(e)
    // }
}


let getHome = (req, res) => {
    return res.render('home.ejs');

}


let getLogin = (req, res) => {
    return res.render('login.ejs');
}

let postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Replace this with your actual authentication logic using Sequelize
        const user = await User.findOne({
            where: {
                username: username,
                password: password
            }
        });

        if (user) {
            // Successful login
            req.session.user = user;  // Store user in session
            // sessionStorage.setItem("fullname", user.username)
            // Check the role and redirect accordingly
            // console.log("-----------------------CHECK LOG-------------------------");
            // console.log(user);
            if (user.role === '1') {
                return res.redirect('/getallaccount');
            } else {

                return res.redirect('/home');
            }
        } else {
            // Failed login
            return res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}


let logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHome,
    getLogin,
    postLogin,
    getHomePage,
    // postlogin: postlogin,
    logout
}
