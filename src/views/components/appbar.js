import React from 'react'


class BarTop extends React.Component {
    render() {
        let { classes } = this.props;

        return (
            <nav className="amber darken-1">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Crear Juego</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default BarTop;