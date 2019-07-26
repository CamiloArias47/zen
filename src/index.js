const express = require('express');
const path = require('path')

const app = express();

//database
require('./database');

//setings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json())

//static files, muestra el index.html
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/games', require('./routes/games'))
app.use('/api/question', require('./routes/questions'))
app.use('*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

//start server
app.listen(app.get('port'), ()=>{
    console.log(`[server] running on port ${app.get('port')}`)
})