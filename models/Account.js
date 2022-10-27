const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Account extends Model {}

Account.init(
{  
        user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
        username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
        email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true,
        },
    },
        password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[8],
        },
    },
        first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
        last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
        payment_info:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "account",
    }
);
//exporting class Account
module.exports = Account;