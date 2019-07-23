const express = require('express');

const app = express();

//database
require('./database');

//setings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json())

//routes
app.use('/api/games', require('./routes/games'))

//start server
app.listen(app.get('port'), ()=>{
    console.log(`[server] running on port ${app.get('port')}`)
})