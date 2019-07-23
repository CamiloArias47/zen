const {Schema, model} = require('mongoose');

const gameSchema = new Schema({
    question: {
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports = model('Game', gameSchema);