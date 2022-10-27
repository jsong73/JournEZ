const Account = require("./Account");
const Activity = require("./Activity");
const Flight = require("./Flight");
const Hotel = require("./Hotel");
const Restaurant = require("./Restaurant");
const Transportation = require("./Transportation");
const Trip = require ("./Trip");

Account.hasMany(Trip, {
    foreignKey:"user_id",
    onDelete:"CASCASE",
});

Trip.belongsTo(Account, {
    foreignKey:"user_id",
    onDelete:"CASCASE",
});

Trip.hasMany(Activity, {
    foreignKey:"id",
});

Trip.belongsTo(Transportation, {
    foreignKey:"id",
});

Trip.belongsTo(Flight, {
    foreignKey:"id",
});

Trip.belongsTo(Restaurant, {
    foreignKey:"id",
});


Trip.belongsTo(Hotel, {
    foreignKey:"id",
});

Activity.belongsTo(Trip, {
    foreignKey:"activity_id",
});

Transportation.belongsTo(Trip, {
    foreignKey:"transportation_id",
});

Flight.belongsTo(Trip, {
    foreignKey:"flight_id",
});

Restaurant.belongsTo(Trip, {
    foreignKey:"restaurant_id",
});

Hotel.belongsTo(Trip, {
    foreignKey:"hotel_id",
});
module.exports = { Account , Activity, Flight, Hotel, Restaurant, Transportation, Trip};