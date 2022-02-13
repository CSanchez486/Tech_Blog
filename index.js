const sequelize = require("sequelize");
const express = require("express");
const session = require("express-session");
const helpers = require("./utils/helpers");

const app = express();
// const path = require("path");
const { Sequelize } = require("sequelize");


const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: "Super secret secret",
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




