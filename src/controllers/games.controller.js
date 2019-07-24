const Game = require('../models/Games')
const Question = require('../models/Questions')
const mongoose = require('mongoose')
const games = {}

games.getGames = async (req, res) => {
    var games = await Game.find();
    res.json(games)
}

games.saveGame = async (req, res) => {
    var {questions} = req.body;
    let game = new Game()

    questions.map( question => {
        let newQuestion = new Question(question)
        game.questions.push( newQuestion ); 
    })

    
    var saved = await game.save();
    res.json({message:saved})
}

games.getGame =  (req, res) => {
    Game.findById(req.params.id, (err, game) => {
        if(err) res.json({empty:true})
        res.json(game)
    })
    //res.json(game)
}

games.editGame = (req, res) => res.json({message:"editar un juego"})

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