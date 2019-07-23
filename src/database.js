const mongoose = require('mongoose');

const URI = 'mongodb://localhost/zen'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.once('open', ()=>{
    console.log(`[database] database is conected...`)
})