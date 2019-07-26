import React from 'react'

const style ={
    button : {
        height: "auto",
        minHeight: "80px",
        width:"100%",
        lineHeight: "unset"
    }
}

class Singler extends React.Component{

    state = {
        question:"¿do you know how play this game?",
        options:["yes I know","No so sorry I don´t know how play this game, but I am goin to lern so fast i am promise","Maybe","a little bit"],
        rightAnswer:1
    }

    showVideoIfExist = ()=>{
        var video = null;
        if(true){
           video = <iframe width="560" height="315" src="https://www.youtube.com/embed/tP0XQYC4rjI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
        return video
    }

    render(){
        return(
            <div className="row">
                <div className="col s12" style={{marginTop:"1rem"}}>
                    {this.showVideoIfExist()}
                </div>
                <div className="col s12">
                    <h3>{this.state.question}</h3>
                </div>
                <div className="row">
                    {
                        this.state.options.map( (option,key) =>{
                            return <div className="col s12 m6" key={key} style={{marginTop:"1rem"}}>
                                      <a className="waves-effect waves-light btn-large" style={style.button}>{option}</a>
                                   </div>
                        })
                    }
                </div>
                
            </div>
        )
    }
}

export default Singler;