const { DataTypes } = require("sequelize/types");
const sequelize = require("../config/connection");


class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKeys: true
    },
    username: {
        type: DataTypes.STRING,
        
    }

})

