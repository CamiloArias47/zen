import React from 'react'
import CardGame from './components/cardGame'

class Game extends React.Component{
    render(){
        var cards = []
        for(var i = 0; i <= 15; i++){
            cards.push(<CardGame 
                            key={i} 
                            sizeCard="s12 m3 l4"
                            match={this.props.match}
                            game={{_id:"5d389f800c44b81f4c1218d0"}}/>)
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