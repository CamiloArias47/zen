import React from 'react'
import {Link} from 'react-router-dom'

class CardResult extends React.Component{

    render(){
        return(
            <a href="#">
                <div className="card">
                    <div className="card-image">
                        <h1>{this.props.result}</h1>
                    </div>
                    <div className="card-content">
                        <h3>{this.props.title}</h3>
                    </div>
                </div>
            </a>
        )
    }
}


class ResultGame extends React.Component{

    render(){
        return(
            <div className="row center-align">
                <div className="col s12 m6">
                    <CardResult result={this.props.results.right} title="Correctas"/>
                </div>
                <div className="col s12 m6">
                    <CardResult result={this.props.results.wrong} title="Incorrectas"/>
                </div>
                <div className="col s12">
                    <Link to="/game" className="waves-effect waves-light btn-large">Volver</Link>
                </div>
            </div>
        )
    }
}

export default ResultGame;