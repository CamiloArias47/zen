import React from 'react'

const style ={
    button : {
        height: "auto",
        minHeight: "80px",
        width:"100%",
        lineHeight: "unset"
    },
    aQuestion:{
        color:"#000"
    }
},

questionString = ["a","b","c","d"]

class Question extends React.Component{

    refPreguntas = React.createRef();

    showVideoIfExist = ()=>{
        var video = (this.props.question.video) ? this.props.question.video : null;

        return video
    }

    focusSingler() {
        this.refPreguntas.current.focus();
    }

    componentDidMount(){
        this.focusSingler();
    }

    render(){
        return(
            <div className="row" ref={this.refPreguntas}>
                <div className="col s12" style={{marginTop:"1rem"}}>
                    {this.showVideoIfExist()}
                </div>
                <div className="col s12">
                    <a href="#" style={style.aQuestion}>
                        <h3>{this.props.question.question}</h3>
                    </a>
                </div>
                <div className="row">
                    {
                        this.props.question.options.map( (option,key) =>{
                            return <div className="col s12 m6" key={key} style={{marginTop:"1rem"}}>
                                      <a href="#" 
                                        className="waves-effect waves-light btn-large" 
                                        style={style.button}
                                        onClick={(e)=>{ e.preventDefault(); this.props.respond(this.props.question._id, questionString[key])}}>
                                         ({questionString[key]}) {option}
                                      </a>
                                   </div>
                        })
                    }
                </div>
                
            </div>
        )
    }
}

export default Question;