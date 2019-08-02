const Game = require('./models/Games')
const {modelQuestion} = require('./models/Questions')
var GameSolo = require('./controllers/gameSolo')

module.exports = io => {

    const INDEX_ANSWERS = ["a","b","c","d"]
    var typeGame,
        users = {},
        gameSolo,
        game;

    io.on('connection', socket =>{
        console.log(`[socket] User connected`)

        //verifica si el juego existe 
        socket.on("start game", (id,cb)=>{
            Game.findById(id, (err, resGame) => {
                if(err){
                    cb(null,{message:"no existe el juego"})
                }
                else{
                    game = resGame
                    cb(resGame,false)
                }
            })
        })

        socket.on("select typeGame", (type, cb) =>{
            typeGame = type;
            if(type == "singler"){
                gameSolo = new GameSolo();
                socket.user = (Object.keys(users).length <= 0) ? "user1" : "user"+ (Object.keys(users).length+1);
                socket.game = gameSolo
                users[socket.user] = socket;
                cb(socket.user)
            }
        })

        socket.on("next question", async (index,idUser,cb) => {
            if(index+1 <= game.questions.length){
                let question = await modelQuestion.findById(game.questions[index])
               
                if(typeGame == "singler"){ 
                    users[idUser]["game"].addQuestion(question)
                }

                cb(question);
            }
            else{
                cb(null,{err:"fin del juego"})
            }
        })

        
        socket.on("send answer", (answer, idUser) =>{
            //console.log(`[socket] recibi respuesta:`,answer)
            let ans = {question:answer.question,answer:answer.answer}
            if(typeGame == "singler"){ 
                users[idUser]["game"].addAnswer(ans)
            }
        })
        
        socket.on("get results", (idUser, cb) => {
            if(typeGame == "singler"){
                let res = users[idUser]["game"].results()
                console.log(`[socket] results`, res)
                cb(res)
            }
        })


        socket.on('disconnect', data =>{
            console.log(`[socket] user disconected`)
        })

    })


}