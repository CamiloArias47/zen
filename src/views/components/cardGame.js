import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import imgBg from '../../public/img/dftCardGame.png'

const style ={
    cardTitle:{
        "color": "#000000",
        "padding": "3px 24px"
    }
}

class CardGame extends React.Component {
    render() {
        var {sizeCard, match, game} = this.props;
        return (
                <Link to={`/game/${game._id}`}>
                    <div className={"col " + sizeCard}>
                        <div className="card">
                            <div className="card-image">
                                <img src={imgBg} alt="juego"/>
                                <span className="card-title" style={style.cardTitle}>{game.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{(game.description != undefined) ? game.description : ""}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                )
            }
}

CardGame.propTypes = {
    game : PropTypes.object.isRequired
}

export default CardGame;