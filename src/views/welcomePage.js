import React from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css' /*no se esta usando pero es necesario para que materialize funcione*/

import  BarTop  from "./components/appbar";

const style = {
    btnPlay: {
        "padding": "0.2rem 13rem",
        "height": "6rem",
        "marginTop": "10em",
        "textTransform": "none"
    }
}

class Welcome extends React.Component {

    render() {
        return (
            <div>
                <BarTop />
                <div className="container">
                    <div className="row">
                        <div className="col s12 valing-wrapper center-align" >
                            <Link to="/game" className="waves-effect waves-light btn-large green darken-2" style={style.btnPlay} >
                                <h4>Jugar</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Welcome;