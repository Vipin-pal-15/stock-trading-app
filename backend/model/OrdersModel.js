const {model} = require("mongoose");

const {OrdersSchema} = require("../schamas/OrdersSchema");

const OrdersModel = new model("order",OrdersSchema);

module.exports = {OrdersModel};