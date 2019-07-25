import React from 'react'


class BarTop extends React.Component {
    render() {
        let { classes } = this.props;

        return (
            <nav className="amber darken-3">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Zen</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default BarTop;