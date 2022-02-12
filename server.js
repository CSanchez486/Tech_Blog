const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Port ${PORT} is working`);
})

sequelize.sync({ force : false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Port ${PORT} is live`);
    });
});