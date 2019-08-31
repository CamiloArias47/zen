import React from 'react'
import CardGame from './components/cardGame'
import axios from 'axios'


class Game extends React.Component{

    state = {
        games:[]
    };
    
    async componentDidMount(){
        let games = await axios.get('http://localhost:3000/api/games/')
        this.setState({games:games.data})

        this.props.socket.on("recibi respuestaLector", data => {
            console.log(`[lector pagina game] ${data}`)
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