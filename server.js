const sequelize = require("./config/connection");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Port ${PORT} is listening`);
})

sequelize.sync({ force : false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Port ${PORT} is live`);
    });
});