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
                                <img src={imgBg}/>
                                <span className="card-title" style={style.cardTitle}>Game Title</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </Link>
                )
            }
}

CardGame.propTypes = {
    sizeCard : PropTypes.string.isRequired,
    game : PropTypes.object.isRequired
}

export default CardGame;