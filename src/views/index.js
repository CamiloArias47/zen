import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Welcome from "./welcomePage"
import Game from "./game"
import PlayGame from './playGame'

class App extends React.Component{

    render(){
        return(
            <Router>
                <Route path="/" exact component={Welcome} />
                <Route path="/game" exact render={(props) => <Game {...props} />} />
                <Route path="/game/:id" render={(props) => <PlayGame {...props} />} />
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));