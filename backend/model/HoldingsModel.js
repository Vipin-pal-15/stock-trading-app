const {model} = require("mongoose");

const {HoldingsSchema} = require('../schamas/HoldingsSchema');

const HoldingsModel=new model("holding", HoldingsSchema)

module.exports = {HoldingsModel};