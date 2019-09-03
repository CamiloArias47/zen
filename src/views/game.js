import React from 'react'
import CardGame from './components/cardGame'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


class Game extends React.Component{

    state = {
        games:[],
        redirect: false,
        route : ""
    };

    routes = {
        muiscas: "5d6dc4bf09bbad2a38e7df12",
        calimas: "5d6dc4fe09bbad2a38e7df18",
        tayronas: "5d6dc4fe09bbad2a38e7df18",
        quimbaya: "5d6dc59409bbad2a38e7df24"
    }
    
    async componentDidMount(){
        let games = await axios.get('http://localhost:3000/api/games/')
        this.setState({games:games.data})

        this.props.socket.on("recibi respuestaLector", data => {
            console.log(data)
            if (data == "A"){
                console.log("si estoy aca")
                this.setState({
                    redirect:true,
                    route: this.routes.muiscas
                })
            }
            else{
                console.log("no entre")
            }
        })
    }

    render(){
        var cards = []

        if(this.state.games.length > 0){
            for(var i = 0; i < this.state.games.length; i++){
                cards.push(<CardGame 
                            key={i} 
                            sizeCard="s12 m4"
                            match={this.props.match}
                            game={this.state.games[i]}/>)
            }
        }
        
        if (this.state.redirect) return <Redirect to={"/game/"+this.state.route} />;

        return(
            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Game