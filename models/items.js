const mongoose = require('mongoose')
const { Schema , model } = mongoose

const itemSchema = new Schema({
    name: {type: String, require: true},
    image: {type: String, require: true},
    color: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
})


const Item = model('Item', itemSchema)

module.exports = Item 