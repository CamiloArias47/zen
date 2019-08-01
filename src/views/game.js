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
    }

    render(){
        var cards = {
            colum1:[],
            colum2:[],
            colum3:[],
        },
        index = 1;

        if(this.state.games.length > 0){
            for(var i = 0; i < this.state.games.length; i++){
                let car = <CardGame 
                            key={i} 
                            match={this.props.match}
                            game={this.state.games[i]}/>

                if(index == 1){
                    cards.colum1.push(car)
                    index = 2
                }
                else if(index == 2){
                    cards.colum2.push(car)
                    index = 3
                }
                else if(index == 3){
                    cards.colum3.push(car)
                    index = 1
                }
            }
        }
        

        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m3 l4">{cards.colum1}</div>
                    <div className="col s12 m3 l4">{cards.colum2}</div>
                    <div className="col s12 m3 l4">{cards.colum3}</div>
                </div>
            </div>
        )
    }
}

export default Game