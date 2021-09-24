 
const mongoose = require('mongoose')
const { Schema , model } = mongoose

const itemSchema = new Schema({
    name: {type: String, require: true},
    img: {type: String, require: true},
    color: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
})


module.exports = mongoose.model('Item', itemSchema)