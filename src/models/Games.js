const {Schema, model} = require('mongoose');
var Question = require('./Questions')

const gameSchema = new Schema({
    questions: [{type: Schema.ObjectId, ref: Question}],
    //user : String
},{
    timestamps:true
})

module.exports = model('Game', gameSchema);