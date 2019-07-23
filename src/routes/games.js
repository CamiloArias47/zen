const {Router} = require('express');
const router = Router();
const {getGames,
       saveGame,
       getGame,
       editGame,
       deleteGame
    } = require('../controllers/games.controller')

router.route('/')
    .get( getGames )
    .post( saveGame )

router.route('/:id')
    .get( getGame )
    .put( editGame )
    .delete( deleteGame )

module.exports = router;