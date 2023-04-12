const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
airlines_name: String,
airlines_seating: String,
price: Number
})
module.exports = mongoose.model("Airlines",costumeSchema)