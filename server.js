const sequelize = require("./config/connection");
const express = require("express");
const session = require("express-session");
const helpers = require("./utils/helpers");

const app = express();
const path = require("path");


const PORT = process.env.PORT || 3001;




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