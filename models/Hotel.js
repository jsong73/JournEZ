const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hotel extends Model {}

Hotel.init(
    {
        hotel:{
        type: DataTypes.STRING,
        allowNull: false,
        },
        room_number:{
        type: DataTypes.STRING,
        allowNull: true,
        },
        checkin_date:{
        type: DataTypes.DATEONLY,
        allowNull: true,    
        },
        checkout_date:{
        type: DataTypes.DATEONLY,
        allowNull: true,    
        },
        room_bill:{
        type: DataTypes.DECIMAL,
        allowNull: true,    
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "hotel",
    }
);

    module.exports = Hotel; 