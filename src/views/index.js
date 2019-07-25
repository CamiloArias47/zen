import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import  BarTop  from "./components/appbar";

class App extends React.Component{

    render(){
        return(
            <Router>
                <BarTop />
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));