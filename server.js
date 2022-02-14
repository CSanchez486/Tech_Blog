const sequelize = require("./config/connection");
const express = require("express");
// const session = require("express-session");
// const helpers = require("./utils/helpers");


const app = express();
// const path = require("path");
const { Sequelize } = require("sequelize");


const PORT = process.env.PORT || 3007;



// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Referenced: Module 14 - 01
// server listens then runs sequelize.sync
app.listen(PORT,() => {
    console.log(`${PORT} is listening`);
    // sequelize.sync({ force: false });
});
    
