const {Schema, model} = require('mongoose');
var Question = require('./Questions')

const gameSchema = new Schema({
    questions: [{type: Schema.Types.ObjectId, ref: "Question", required:true}],
    //user : String,
    date: {
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

module.exports = model('Game', gameSchema);