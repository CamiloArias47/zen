import React from 'react'
import imgBg from '../../../public/img/dftCardGame.png'

class CardTypeGame extends React.Component {
    render() {
        var {clickFunction, bgImg, title, type} = this.props
        return (
            <a onClick={clickFunction} href="#" data-type={type}>
                <div className="card" data-type={type}>
                    <div className="card-image" data-type={type}>
                        <img src={`/${bgImg}`} data-type={type}/>
                    </div>
                    <div className="card-content" data-type={type}>
                        <h4 data-type={type}>{title}</h4>
                    </div>
                </div>
            </a>
        )
    }
}

class TypeGame extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <CardTypeGame clickFunction={this.props.funcTypeGame} bgImg={imgBg} title="Solo" type="singler" />
                </div>
                <div className="col s12 m6">
                     <CardTypeGame clickFunction={this.props.funcTypeGame} bgImg={imgBg} title="multiplayer" type="multiplayer"/>
                </div>
            </div>
        )
    }
}

export default TypeGame;