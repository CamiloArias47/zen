const { Schema, model} = require('mongoose')

const questionSchema = new Schema({
    position:Number,
    question: {
        type: String,
        required: true
    },
    video:{
        type:String, 
        required:false
    },
    answers1:{
        type:String, 
        require:true
    },
    answers2:{
        type:String, 
        require:true
    },
    answers3:String,
    answers4:String,
    rightAnswer:Number
},{
    timestamps:true
})

const quest = {
    schema : questionSchema, 
    modelQuestion : model('Question',questionSchema)
}

module.exports = quest