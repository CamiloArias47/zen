import React from 'react'
import TypeGame from './components/playGame/typeGame'
import Singler from './components/playGame/singler'

class PlayGame extends React.Component{

    state = {
        typeGame:null
    }

    componentDidMount(){
        //pedir el juego
    }

    selectTypeGame = (e)=>{
        e.preventDefault()
        this.setState({typeGame: e.currentTarget.dataset.type})
    }

    render(){
        var component 
        if(this.state.typeGame == null){
            component = <div>
                            <h1>Name game</h1>
                            <TypeGame funcTypeGame={this.selectTypeGame}/>
                        </div>
        }
        else if(this.state.typeGame == "singler"){
           component = <Singler/>
        }
        else{
           component = <h1>Juguemos {this.state.typeGame}</h1>
        }


        
        return(
            <div className="container center-align">
                {component}
            </div>
        )
    }
}
export default PlayGame;