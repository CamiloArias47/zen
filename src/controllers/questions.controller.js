const {modelQuestion} = require('../models/Questions')

const question = {}

question.getQuestions = async (req,res) => {
    let questions = await modelQuestion.find()
    res.json(questions)
}

question.update = (req, res) => {
   
    modelQuestion.findByIdAndUpdate(req.params.id, {...req.body}, (err, result)=>{
        if(err){
            res.json({updated:false,message:err})
        }
        else{
            res.json({updated:true, questionUpdated:result})
        } 
    })
}

question.getQuestion = (req, res) => {
    modelQuestion.findById(req.params.id, (err,question)=>{
        if(err){
            res.json({found:false, message:err})
        }
        else{
            res.json({found:true, question})
        }
    })
}

question.deleteQuestion = (req,res) => {
    modelQuestion.findByIdAndDelete(req.params.id, (err, deleted) => {
        if(err){
            res.json({deleted:false})
        }
        else{
            res.json({deleted:true})
        }
    })
}

module.exports = question;