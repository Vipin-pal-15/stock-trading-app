const {model} = require("mongoose");

const {PositionsSchema} = require("../schamas/PositionsSchema");

const PositionsModel = new model("position",PositionsSchema);

module.exports = {PositionsModel}