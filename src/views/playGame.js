import React from 'react'
import {Link} from 'react-router-dom'
import TypeGame from './components/playGame/typeGame'
import Question from './components/playGame/question'
import ResultGame from './components/playGame/resultGame'

const socket = io(),
      style = {
          backGames : {color:"#000"}
      }

class PlayGame extends React.Component{

    state = {
        typeGame:null,
        userId:"",
        soloAnswers:[],
        indexQuestion: 0,
        nameGame:"Nombre del juego",
        question:{
            options:["","","",""],
            createdAt: "",
            position: 0,
            question: "",
            rightAnswer: 0,
            updatedAt: "",
            video: "",
            __v: 0,
            _id: ""
        },
        results:{right:0,wrong:0}
    }

    idGame = this.props.match.params.id


    componentDidMount(){
        //verificar que el juego existe
        socket.emit("start game", this.idGame, (data,err)=>{
            if(err){
                this.setState({typeGame:"error"})
            }
            else{
                this.setState({nameGame:data.title})
            }
        })
    }

    nextQuestion = ()=>{
        socket.emit("next question", this.state.indexQuestion, this.state.userId, (question, err)=>{
            console.log(`[playGame] indexQuestion`,this.state.indexQuestion)
            if(err){
                socket.emit("get results", this.state.userId, result => {
                    this.setState({
                        typeGame:"results",
                        results:result
                    })
                })
            }
            else{
                let preguntas = []
                if(question.answers1 != null){
                    preguntas.push(question.answers1)
                }
                if(question.answers2 != null){
                    preguntas.push(question.answers2)
                }
                if(question.answers3 != null){
                    preguntas.push(question.answers3)
                }
                if(question.answers4 != null){
                    preguntas.push(question.answers4)
                }
                
                this.setState({
                    question:{
                        options:preguntas,
                        createdAt: question.createdAt,
                        position: question.position,
                        question: question.question,
                        rightAnswer: question.rightAnswer,
                        updatedAt: question.updatedAt,
                        video: question.video ? 
                            <iframe width="560" height="315" src={question.video} frameBorder="0" showinfo="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            : false,
                        __v: question.__v,
                        _id: question._id
                    },
                    indexQuestion: this.state.indexQuestion+1
                })
            }
        })
    }


    //funcion que permite selccionar el tipo de juego, se conecta via socket al servidor
    selectTypeGame = (e)=>{
        e.preventDefault()
        let type = e.currentTarget.dataset.type;
        this.setState({typeGame: type})
        socket.emit("select typeGame", type, userId => {
            console.log(`[recibi user id] ${userId}`)
            this.setState({userId:userId})

            if(type == "singler"){
                this.nextQuestion()
            }
        })
    }

    choseAnswer = (numQuestion, answer) => {
        let res = this.state.soloAnswers,
            objSend = {question:numQuestion,answer};
        res.push(objSend)
        this.setState({
            soloAnswers:res
        })

        socket.emit("send answer", objSend, this.state.userId)
        
        this.nextQuestion()
    }

    render(){
        var component 
        if(this.state.typeGame == null){
            console.log(`[playGame] typegame = null, seleccionar`)
            component = <div>
                            <a href="#" style={style.backGames}><h1>{this.state.nameGame}</h1></a>
                            <TypeGame funcTypeGame={this.selectTypeGame}/>
                        </div>
        }
        else if(this.state.typeGame == "singler"){
           component = <Question respond={this.choseAnswer} question={this.state.question}/>
        }
        else if(this.state.typeGame == "multiplayer"){
           component = <h1>Juguemos {this.state.typeGame}</h1>
        }
        else if(this.state.typeGame == "results"){
            component = <ResultGame results={this.state.results}/>
        }
        else{
            component = <Link to="/game"><h1 style={style.backGames}>El juego no existe, presiona enter y selecciona otro.</h1></Link>
        }


        
        return(
            <div className="container center-align">
                {component}
            </div>
        )
    }
}
export default PlayGame;