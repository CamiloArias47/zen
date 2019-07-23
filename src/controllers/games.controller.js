const games = {}

games.getGames = (req, res) => res.json({message:"get Juegos"})

games.saveGame = (req, res) => res.json({message:"save game"})

games.getGame = (req, res) => res.json({message:"te doy un juego"})

games.editGame = (req, res) => res.json({message:"editar un juego"})

games.deleteGame = (req, res) => res.json({message: "elimino un juego"})

module.exports = games;