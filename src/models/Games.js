const {Schema, model} = require('mongoose');
var {schema, modelQuestion } = require('./Questions')

const gameSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    creator:{
        type:String,
        required:true
    },
    questions: {type: [Schema.ObjectId], ref: "Question", required:true},
    //user : String,
    date: {
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

module.exports = model('Game', gameSchema);