const Game = require('../models/Games')
const games = {}

games.getGames = async (req, res) => {
    console.log(`[gamesController] getGames pidiendo...`)
    var games = await Game.find();
    console.log(`[gamesController] getGames enviando...`)
    res.json(games)
}

games.saveGame = (req, res) => res.json({message:"save game"})

games.getGame = (req, res) => res.json({message:"te doy un juego"})

games.editGame = (req, res) => res.json({message:"editar un juego"})

games.deleteGame = (req, res) => res.json({message: "elimino un juego"})

module.exports = games;