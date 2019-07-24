const Game = require('../models/Games')
const {modelQuestion} = require('../models/Questions')
const mongoose = require('mongoose')
const games = {}

games.getGames = async (req, res) => {
    var games = await Game.find();
    res.json(games)
}

games.saveGame = async (req, res) => {

    var {questions,creator} = req.body;

    let save = new Promise( (resolve, reject) =>{
        let quests = []
        questions.map( question => {
            let newQuestion = new modelQuestion(question)
            let questionsaved = newQuestion.save()
            console.log(`[save question] questionsaved:`, newQuestion._id)
            quests.push( newQuestion._id);
        }) 
        if(questions.length <= 0){
            reject("no se guardo nada")
        }
        else{
            resolve(quests)
        }
    })

    save.then( asks => {
            let game = new Game({creator})
            game.questions = asks
            return game.save();
        })
        .then(saved => { res.json({message:saved}) })
        .catch( err => { res.json({err})} )
}

games.getGame =  (req, res) => {
    Game.findById(req.params.id, (err, game) => {
        if(err) res.json({empty:true})
        res.json(game)
    })
    //res.json(game)
}

games.editGame = (req, res) => {
    let {creator} = req.body
    Game.findByIdAndUpdate(req.params.id, {creator}, (err,result)=>{
        if(err){
            res.json({updated:false, message: err.message})
        }
        else{
            res.json({updated:true, gameUpdated: result})
        }
    })
}

games.deleteGame =  (req, res) => {
    Game.findByIdAndDelete(req.params.id, (err, deleted) => {
        if(err){
            res.json({deleted:false})
        }
        else{
            res.json({deleted:true})
        }
    })
}

module.exports = games;