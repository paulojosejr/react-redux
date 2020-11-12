const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.schema ({
    description: {type: String, required: true},
    done: { type: Boolean, required: true, default: false},
    CreateAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)