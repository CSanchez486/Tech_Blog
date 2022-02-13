const { DataTypes } = require("sequelize/types");
const sequelize = require("../config/connection");
// Referenced https://www.npmjs.com/package/bcryptjs
const bcrypt = require("bcryptjs");


// referenced Module 14-28
class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }

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
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate will confirm that the length of the password is 12 characters.
        validate: {
            len: [12],
        },
    },
    // referenced Module 14-28
    hooks: {
        beforeCreate: async (newUser) => {
            newUser.password = await bcrypt.hash(newUser.password, 10);
            return newUser;
            },
        beforeCreate: async (updateUser) => {
            updateUser.password = await bcrypt.hash(newUser.password,10);
            return newUser;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
});

