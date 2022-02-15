const sequelize = require("./config/connection");
const express = require("express");
const session = require("express-session");
// ref: https://www.npmjs.com/package/sequelstore-connect
const SequelStore = require('sequelstore-connect')(session);
// const helpers = require("./utils/helpers");


const app = express();
// const path = require("path");
// const { Sequelize } = require("sequelize");


const PORT = process.env.PORT || 3007;

// Ref: https://www.npmjs.com/package/express-session
const sess = {
    secret: 'juicy grapes',
    cookie: {},
    resave: false,
    saveUninitialized: true
}

app.use(session);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Referenced: Module 14 - 01
// server listens then runs sequelize.sync
app.listen(PORT,() => {
    console.log(`${PORT} is listening`);
    // sequelize.sync({ force: false });
});
    
